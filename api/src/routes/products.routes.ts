import { Router } from "express";

import { CreateProductController } from "../modules/products/useCases/createProduct/CreateProductController";
import { ListProductsController } from "../modules/products/useCases/listProducts/ListProductsController";

const productRoutes = Router();

const createProductController = new CreateProductController();
const listProductsController = new ListProductsController();

productRoutes.post("/", createProductController.handle);
productRoutes.get("/", listProductsController.handle);

export { productRoutes };
