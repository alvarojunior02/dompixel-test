import { Request, Response } from "express";
import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductController {
  async handle(req: Request, res: Response) {
    const { name, category, price } = req.body;

    const createProductUseCase = new CreateProductUseCase();

    const newProduct = await createProductUseCase.execute({
      name,
      category,
      price,
    });

    return res.status(201).json(newProduct);
  }
}
