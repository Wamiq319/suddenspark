import { cookies } from "next/headers";
import { NextRequest } from "next/server";

const SESSION_DURATION = 30 * 60 * 1000; // 30 minutes in milliseconds
const SESSION_COOKIE_NAME = "admin_session";

export interface AdminSession {
  authenticated: boolean;
  timestamp: number;
}

export async function verifyPassword(inputPassword: string): Promise<boolean> {
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) {
    console.error("ADMIN_PASSWORD not set in environment variables");
    return false;
  }

  return inputPassword === adminPassword;
}

export async function createSession(): Promise<string> {
  const session: AdminSession = {
    authenticated: true,
    timestamp: Date.now(),
  };

  return JSON.stringify(session);
}

export function isSessionValid(sessionData: string): boolean {
  try {
    const session: AdminSession = JSON.parse(sessionData);
    const now = Date.now();
    const sessionAge = now - session.timestamp;

    return session.authenticated && sessionAge < SESSION_DURATION;
  } catch {
    return false;
  }
}

export async function getSessionFromRequest(
  request: NextRequest
): Promise<AdminSession | null> {
  const sessionCookie = request.cookies.get(SESSION_COOKIE_NAME);

  if (!sessionCookie?.value) {
    return null;
  }

  if (!isSessionValid(sessionCookie.value)) {
    return null;
  }

  try {
    return JSON.parse(sessionCookie.value);
  } catch {
    return null;
  }
}

export async function getSessionFromCookies(): Promise<AdminSession | null> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME);

  if (!sessionCookie?.value) {
    return null;
  }

  if (!isSessionValid(sessionCookie.value)) {
    return null;
  }

  try {
    return JSON.parse(sessionCookie.value);
  } catch {
    return null;
  }
}

export function clearSession() {
  return `${SESSION_COOKIE_NAME}=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0`;
}
