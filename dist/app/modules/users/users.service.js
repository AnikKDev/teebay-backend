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
exports.UserServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const prisma_1 = __importDefault(require("../../../utils/prisma"));
const testUser = (_, { firstName: string }) => __awaiter(void 0, void 0, void 0, function* () {
    return "randomId";
});
const signUp = (_, { firstName, email, lastName, password, confirmPassword, phoneNumber, address, }) => __awaiter(void 0, void 0, void 0, function* () {
    if (password === confirmPassword) {
        const result = yield prisma_1.default.user.create({
            data: {
                firstName,
                email,
                lastName,
                password,
                phoneNumber,
                address,
            },
        });
        return result;
    }
    else {
        throw new ApiError_1.default(http_status_1.default.NOT_ACCEPTABLE, "Password and confirm password should be the same.");
    }
});
const userByEmail = (_, { email }) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.findUnique({
        where: { email },
        include: {
            orders: {
                include: {
                    product: true, // Include product details
                },
            },
            rents: {
                include: {
                    product: true, // Include product details
                },
            },
            products: true,
        },
    });
    console.log(user);
    // Logging the output to see what is being returned by Prisma
    return user;
});
const signIn = (_, { email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.findUnique({
        where: { email },
        include: {
            orders: {
                include: {
                    product: true, // Include product details
                },
            },
            rents: {
                include: {
                    product: true, // Include product details
                },
            },
        },
    });
    if (!user) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "User with this email can not be found.");
    }
    if (user.password === password) {
        return user;
    }
    else {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, "Invalid credentials.");
    }
    // Logging the output to see what is being returned by Prisma
});
exports.UserServices = {
    testUser,
    signUp,
    userByEmail,
    signIn,
};
