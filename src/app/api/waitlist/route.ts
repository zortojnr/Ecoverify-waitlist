/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ADMIN_DEFAULTS = [
  "reezaalarafat@gmail.com",
  "abovetemptations116@gmail.com",
];

function corsHeaders(origin?: string) {
  return {
    "Access-Control-Allow-Origin": origin || "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  } as Record<string, string>;
}

function isValidEmail(email: string) {
  return /.+@.+\..+/.test(email);
}

function htmlEscape(str: string) {
  return str.replace(/[&<>\"]/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
  }[c] as string));
}

async function getTransport() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const secure = String(process.env.SMTP_SECURE || "false").toLowerCase() === "true";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error("SMTP configuration missing. Ensure SMTP_HOST, SMTP_USER, SMTP_PASS are set.");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

export async function OPTIONS(req: NextRequest) {
  const origin = req.headers.get("origin") || undefined;
  return new Response(null, { status: 204, headers: corsHeaders(origin) });
}

export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin") || undefined;
  try {
    const body = await req.json().catch(() => null);
    if (!body) {
      return Response.json(
        { error: "Invalid JSON body" },
        { status: 400, headers: corsHeaders(origin) }
      );
    }

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim().toLowerCase();
    const userType = String(body.userType || "").trim();

    const validTypes = ["Consumer", "Brand", "Student"];
    const errors: Record<string, string> = {};
    if (!name || name.length < 2) errors.name = "Full Name is required";
    if (!email || !isValidEmail(email)) errors.email = "Valid Email is required";
    if (!validTypes.includes(userType)) errors.userType = "User Type must be Consumer, Brand, or Student";

    if (Object.keys(errors).length > 0) {
      return Response.json(
        { error: "Validation failed", details: errors },
        { status: 422, headers: corsHeaders(origin) }
      );
    }

    const transporter = await getTransport();
    const from = process.env.FROM_EMAIL || process.env.SMTP_USER || "no-reply@localhost";
    const adminRecipients = (process.env.ADMIN_EMAILS?.split(/[;,\s]+/).filter(Boolean) || ADMIN_DEFAULTS).join(", ");

    const adminHtml = `
      <h2>New Ecoverify Waitlist Signup</h2>
      <p><strong>Name:</strong> ${htmlEscape(name)}</p>
      <p><strong>Email:</strong> ${htmlEscape(email)}</p>
      <p><strong>User Type:</strong> ${htmlEscape(userType)}</p>
      <p>Timestamp: ${new Date().toISOString()}</p>
    `;

    const userHtml = `
      <div style="font-family:Inter,Arial,sans-serif;">
        <h2 style="color:#00c16e;">Welcome to Ecoverify ??</h2>
        <p>Hi ${htmlEscape(name)},</p>
        <p>Thanks for joining the Ecoverify waitlist! You're officially on our list for early access to a bold, intelligent sustainability platform.</p>
        <p>We'll reach out soon with next steps. In the meantime, stay tuned.</p>
        <p style="margin-top:16px;"> The Ecoverify Team</p>
      </div>
    `;

    await transporter.sendMail({
      from,
      to: adminRecipients,
      subject: "Ecoverify Waitlist: New Signup",
      html: adminHtml,
    });

    await transporter.sendMail({
      from,
      to: email,
      subject: "You're on the Ecoverify Waitlist",
      html: userHtml,
    });

    return Response.json(
      { success: true, message: "Waitlist submission received. Confirmation email sent." },
      { status: 200, headers: corsHeaders(origin) }
    );
  } catch (err: any) {
    const message = err?.message || "Unknown error";
    return Response.json(
      { error: "Submission failed", message },
      { status: 500, headers: corsHeaders(origin) }
    );
  }
}
