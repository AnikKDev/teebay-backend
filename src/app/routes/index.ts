import express, { Request, Response } from "express";
import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: "/test",
    route: (req: Request, res: Response) => {
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Test successful",
      });
    },
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
