import { Router, Request, Response } from "express";

import { productRoutes } from "./products.routes";

const routes = Router();

routes.use("/products", productRoutes);

routes.get("/", async (request: Request, response: Response) => {
  return response.status(200).json({
    message: "API Fullstack Job Test - DomPixel running",
  });
});

export { routes };
