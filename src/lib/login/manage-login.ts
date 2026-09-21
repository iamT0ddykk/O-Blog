import bcrypt from "bcryptjs";

export async function hashPassword(password: string) {
  const hash = await bcrypt.hash(password, 10);

  return hash;
}

export async function verifyHash(password: string, hash: string) {
  const isValid = await bcrypt.compare(password, hash);
  return isValid;
}

(async () => {
  const hashedPass = await hashPassword("1234");
  console.log({ hashedPass });
})();
