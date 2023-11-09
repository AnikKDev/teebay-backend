"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const prisma_1 = __importDefault(require("../../../utils/prisma"));
const addProduct = (_, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.product.create({
        data,
    });
    return result;
});
const allProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.product.findMany({});
    return result;
});
const productsByUserEmail = (_, { email }) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.product.findMany({
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
});
const rentedProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.rent.findMany({
        select: {
            user: true,
        },
    });
    return result;
});
const orderedProducts = (_, { email }) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.order.findMany({
        where: {
            userEmail: email,
        },
    });
    console.log(result);
    return result;
});
const productById = (_, { id, }) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.product.findUnique({
        where: {
            id,
        },
    });
    return result;
});
const createRent = (_, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.rent.create({
        data,
    });
    return result;
});
const createOrder = (_, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.order.create({
        data,
        include: {
            product: true,
            user: true,
        },
    });
    return result;
});
exports.ProductService = {
    addProduct,
    allProducts,
    orderedProducts,
    rentedProducts,
    productById,
    productsByUserEmail,
    createRent,
    createOrder,
};
