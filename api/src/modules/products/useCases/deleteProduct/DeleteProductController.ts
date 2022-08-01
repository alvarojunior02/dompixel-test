import { Request, Response } from "express";
import { FindProductByIdUseCase } from "../findProductById/FindProductByIdUseCase";
import { DeleteProductUseCase } from "./DeleteProductUseCase";

export class DeleteProductController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const deleteProductUseCase = new DeleteProductUseCase();

    await deleteProductUseCase.execute(parseInt(id, 10));

    return res.status(200).json({ message: "Product successfull deleted!" });
  }
}
