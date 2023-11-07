import { ProductService } from "../../modules/products/products.service";

const queries = {};
const mutations = {
  addProduct: ProductService.addProduct,
  createOrder: ProductService.createOrder,
  createRent: ProductService.createRent,
};
const ordersAndRentsResolvers = {
  queries,
  mutations,
};
export default ordersAndRentsResolvers;
