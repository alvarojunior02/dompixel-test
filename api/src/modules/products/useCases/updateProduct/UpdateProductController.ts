import { Request, Response } from "express";
import { FindProductByIdUseCase } from "../findProductById/FindProductByIdUseCase";
import { UpdateProductUseCase } from "./UpdateProductUseCase";

export class UpdateProductController {
  async handle(req: Request, res: Response) {
    const { name, category, price } = req.body;
    const { id } = req.params;

    const updateProductUseCase = new UpdateProductUseCase();

    await updateProductUseCase.execute({
      id: parseInt(id, 10),
      name,
      category,
      price,
    });

    const findProductByIdUseCase = new FindProductByIdUseCase();

    const productUpdated = await findProductByIdUseCase.execute(
      parseInt(id, 10)
    );

    return res.status(200).json(productUpdated);
  }
}
