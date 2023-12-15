import { SignupFormType } from "@/lib/auth/schema";
import prisma from "@/lib/prisma/prisma";
import bcrypt from "bcrypt";

export const createUser = async (user: SignupFormType) => {
  const hashPass = await bcrypt.hash(user.password, 10);
  const comfirmHasPass = await bcrypt.hash(user.confirmPassword, 10);

  try {
    const isUserExist = await prisma.user.findUnique({
      where: {
        email: user.email,
      },
    });

    if (!isUserExist) throw new Error("User Already Exist");

    const addUser = await prisma.user.create({
      data: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        hasPassword: hashPass,
        comfirmHasPassword: comfirmHasPass,
      },
    });
    return { data: addUser };
  } catch (err) {
    console.log("err: ", err);
  }
};
