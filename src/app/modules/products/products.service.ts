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

export const ProductService = {
  addProduct,
};
