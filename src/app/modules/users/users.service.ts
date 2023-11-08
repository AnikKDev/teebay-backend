import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
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
  {
    firstName,
    email,
    lastName,
    password,
    confirmPassword,
    phoneNumber,
    address,
  }: UserData
): Promise<UserData | null> => {
  if (password === confirmPassword) {
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
  } else {
    throw new ApiError(
      httpStatus.NOT_ACCEPTABLE,
      "Password and confirm password should be the same."
    );
  }
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
const signIn = async (
  _: any,
  { email, password }: { email: string; password: string }
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
  if (!user) {
    throw new ApiError(
      httpStatus.NOT_FOUND,
      "User with this email can not be found."
    );
  }
  if (user.password === password) {
    return user;
  } else {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Invalid credentials.");
  }

  // Logging the output to see what is being returned by Prisma
};

export const UserServices = {
  testUser,
  signUp,
  userByEmail,
  signIn,
};
