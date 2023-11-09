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
const express4_1 = require("@apollo/server/express4");
const app_1 = __importDefault(require("./app"));
const graphql_1 = __importDefault(require("./app/graphql"));
const config_1 = __importDefault(require("./config"));
const logger_1 = require("./utils/logger");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // start gql server
        app_1.default.use((0, express4_1.expressMiddleware)(yield (0, graphql_1.default)()));
        app_1.default.listen(config_1.default.port, () => logger_1.logger.info("Starting gql server at port " + config_1.default.port));
    });
}
main();
