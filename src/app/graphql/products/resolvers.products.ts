import { ProductService } from "../../modules/products/products.service";

const queries = {};
const mutations = {
  addProduct: ProductService.addProduct,
};
const productResolvers = {
  queries,
  mutations,
};
export default productResolvers;
