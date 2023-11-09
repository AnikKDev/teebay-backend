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
const server_1 = require("@apollo/server");
const mutations_ordersAndRents_1 = __importDefault(require("./ordersAndRents/mutations.ordersAndRents"));
const resolvers_ordersAndRents_1 = __importDefault(require("./ordersAndRents/resolvers.ordersAndRents"));
const mutations_products_1 = __importDefault(require("./products/mutations.products"));
const queries_products_1 = __importDefault(require("./products/queries.products"));
const resolvers_products_1 = __importDefault(require("./products/resolvers.products"));
const typeDefs_products_1 = __importDefault(require("./products/typeDefs.products"));
const mutations_users_1 = __importDefault(require("./users/mutations.users"));
const queries_users_1 = __importDefault(require("./users/queries.users"));
const resolvers_users_1 = __importDefault(require("./users/resolvers.users"));
const typeDef_users_1 = __importDefault(require("./users/typeDef.users"));
function createApolloServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const gqlServer = new server_1.ApolloServer({
            typeDefs: `
    ${typeDef_users_1.default}
    ${typeDefs_products_1.default}
    type Query {
      ${queries_products_1.default}
      ${queries_users_1.default}
   }
   type Mutation {
       ${mutations_users_1.default}
       ${mutations_products_1.default}
       ${mutations_ordersAndRents_1.default}
   }
    `,
            resolvers: {
                Query: Object.assign(Object.assign({}, resolvers_users_1.default.queries), resolvers_products_1.default.queries),
                Mutation: Object.assign(Object.assign(Object.assign({}, resolvers_users_1.default.mutations), resolvers_products_1.default.mutations), resolvers_ordersAndRents_1.default.mutations),
            },
        });
        yield gqlServer.start();
        return gqlServer;
    });
}
exports.default = createApolloServer;
