"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const router = express_1.default.Router();
const moduleRoutes = [
    // ... routes
    {
        path: "/test",
        route: (req, res) => {
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Test successful",
            });
        },
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
