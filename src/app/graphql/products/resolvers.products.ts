import { ProductService } from "../../modules/products/products.service";

const queries = {
  allProducts: ProductService.allProducts,
  orders: ProductService.orderedProducts,
  rents: ProductService.rentedProducts,
  productById: ProductService.productById,
};
const mutations = {
  addProduct: ProductService.addProduct,
};
const productResolvers = {
  queries,
  mutations,
};
export default productResolvers;
