import prisma from "../../../utils/prisma";
import { ProductData } from "./products.interface";

const addProduct = async (
  _: any,
  data: ProductData
): Promise<ProductData | null> => {
  const result = await prisma.product.create({
    data,
  });
  return result;
};

const allProducts = async (): Promise<ProductData[] | null> => {
  const result = await prisma.product.findMany({});
  return result;
};
const productsByUserEmail = async (
  _: any,
  { email }: { email: string }
): Promise<ProductData[] | null> => {
  const result = await prisma.product.findMany({
    where: {
      userEmail: email,
    },
    include: {
      orders: true,
      rents: true,
      user: true,
    },
  });
  return result;
};

const rentedProducts = async () => {
  const result = await prisma.rent.findMany({
    select: {
      user: true,
    },
  });
  return result;
};
const orderedProducts = async (_: any, { email }: { email: string }) => {
  const result = await prisma.order.findMany({
    where: {
      userEmail: email,
    },
  });
  console.log(result);
  return result;
};

const productById = async (
  _: any,
  {
    id,
  }: {
    id: string;
  }
): Promise<ProductData | null> => {
  const result = await prisma.product.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const createRent = async (
  _: any,
  data: { userEmail: string; productId: string }
) => {
  const result = await prisma.rent.create({
    data,
  });
  return result;
};

const createOrder = async (
  _: any,
  data: { userEmail: string; productId: string }
) => {
  const result = await prisma.order.create({
    data,
    include: {
      product: true,
      user: true,
    },
  });
  return result;
};

export const ProductService = {
  addProduct,
  allProducts,
  orderedProducts,
  rentedProducts,
  productById,
  productsByUserEmail,
  createRent,
  createOrder,
};
