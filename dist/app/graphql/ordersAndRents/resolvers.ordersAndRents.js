"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_service_1 = require("../../modules/products/products.service");
const queries = {};
const mutations = {
    addProduct: products_service_1.ProductService.addProduct,
    createOrder: products_service_1.ProductService.createOrder,
    createRent: products_service_1.ProductService.createRent,
};
const ordersAndRentsResolvers = {
    queries,
    mutations,
};
exports.default = ordersAndRentsResolvers;
