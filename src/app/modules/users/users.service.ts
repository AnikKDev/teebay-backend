import prisma from "../../../utils/prisma";
import { UserData } from "./users.interface";

const testUser = async (
  _: any,
  { firstName: string }: Record<string, unknown>
) => {
  return "randomId";
};

const signUp = async (
  _: any,
  { firstName, email, lastName, password, phoneNumber, address }: UserData
): Promise<UserData | null> => {
  const result = await prisma.user.create({
    data: {
      firstName,
      email,
      lastName,
      password,
      phoneNumber,
      address,
    },
  });
  return result;
};

const userByEmail = async (
  _: any,
  { email }: { email: string }
): Promise<UserData | null> => {
  const user = await prisma.user.findUnique({
    where: { email },
    include: {
      orders: {
        include: {
          product: true, // Include product details
        },
      },
      rents: {
        include: {
          product: true, // Include product details
        },
      },
    },
  });

  // Logging the output to see what is being returned by Prisma

  return user;
};

export const UserServices = {
  testUser,
  signUp,
  userByEmail,
};
