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

const allRentedProducts = async () => {
  const result = await prisma.rent.findMany({
    select: {
      User: true,
    },
  });
  return result;
};
const allOrderedProducts = async () => {
  const result = await prisma.order.findMany({});
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

export const ProductService = {
  addProduct,
  allProducts,
  allRentedProducts,
  allOrderedProducts,
  productById,
};
