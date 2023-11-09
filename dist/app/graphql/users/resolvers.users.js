"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_service_1 = require("../../modules/users/users.service");
const queries = {
    userByEmail: users_service_1.UserServices.userByEmail,
};
const mutations = {
    signUp: users_service_1.UserServices.signUp,
    signIn: users_service_1.UserServices.signIn,
};
const userResolvers = {
    queries,
    mutations,
};
exports.default = userResolvers;
