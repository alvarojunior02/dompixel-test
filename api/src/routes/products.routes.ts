import { Router } from "express";

import { CreateProductController } from "../modules/products/useCases/createProduct/CreateProductController";
import { ListProductsController } from "../modules/products/useCases/listProducts/ListProductsController";
import { FindProductByIdController } from "../modules/products/useCases/findProductById/FindProductByIdController";
import { UpdateProductController } from "../modules/products/useCases/updateProduct/UpdateProductController";
import { DeleteProductController } from "../modules/products/useCases/deleteProduct/DeleteProductController";

const productRoutes = Router();

const createProductController = new CreateProductController();
const listProductsController = new ListProductsController();
const findProductByIdController = new FindProductByIdController();
const updateProductController = new UpdateProductController();
const deleteProductController = new DeleteProductController();

productRoutes.post("/", createProductController.handle);
productRoutes.get("/", listProductsController.handle);
productRoutes.get("/:id", findProductByIdController.handle);
productRoutes.put("/:id", updateProductController.handle);
productRoutes.delete("/:id", deleteProductController.handle);

export { productRoutes };
