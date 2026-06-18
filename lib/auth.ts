import { compare } from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function verifyUserCredentials(email: string, password: string) {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return null;
  }

  const isValid = await compare(password, user.password);
  if (!isValid) {
    return null;
  }

  return user;
}
