import bcrypt from "bcryptjs";

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

(async () => {
  const hashedPass = await hashPassword("123");
  console.log({ hashedPass });
})();
