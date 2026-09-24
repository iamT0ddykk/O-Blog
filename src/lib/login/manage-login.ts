import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { date } from "zod";

const jwtSecretKey = process.env.JWT_SECRET_KEY;
const jwtEncryptedKey = new TextEncoder().encode(jwtSecretKey);

const loginExpSeconds = Number(process.env.LOGIN_EXPIRATION_SECONDS) || 86400;
const loginExpString = process.env.LOGIN_EXPIRATION_STRING || "1d";
const loginCookieName = process.env.LOGIN_COOKIE_NAME || "loginSession";

export async function hashPassword(password: string) {
  const hash = await bcrypt.hash(password, 10);
  const b64 = await Buffer.from(hash).toString("base64");
  return b64;
}

export async function verifyPassword(password: string, base64hash: string) {
  const hash = await Buffer.from(base64hash, "base64").toString("utf-8");
  const isValid = await bcrypt.compare(password, hash);
  return isValid;
}

export async function createLoginSession(username: string) {
  const expiresAt = new Date(Date.now() + loginExpSeconds * 1000);
  const loginSession = username + "asd";

  const cookieStore = await cookies();

  cookieStore.set(loginCookieName, loginSession, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    expires: expiresAt,
  });
}
export async function DeleteLoginSession(username: string) {
  const cookieStore = await cookies();

  cookieStore.delete(loginCookieName);
}
