"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_service_1 = require("../../modules/products/products.service");
const queries = {
    allProducts: products_service_1.ProductService.allProducts,
    orders: products_service_1.ProductService.orderedProducts,
    rents: products_service_1.ProductService.rentedProducts,
    productById: products_service_1.ProductService.productById,
};
const mutations = {
    addProduct: products_service_1.ProductService.addProduct,
};
const productResolvers = {
    queries,
    mutations,
};
exports.default = productResolvers;
