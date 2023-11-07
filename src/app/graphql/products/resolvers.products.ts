import { ProductService } from "../../modules/products/products.service";

const queries = {
  allProducts: ProductService.allProducts,
  allOrderedProducts: ProductService.allOrderedProducts,
  allRentedProducts: ProductService.allRentedProducts,
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
