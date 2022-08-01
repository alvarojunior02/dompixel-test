import "express-async-errors";
import express, { NextFunction, Response, Request } from "express";

import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json";

import { AppError } from "./error/AppError";
import { routes } from "./routes";

import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(5000, () => console.log("Server is running"));
