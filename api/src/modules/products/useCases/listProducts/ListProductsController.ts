import { Request, Response } from "express";
import { ListProductsUseCase } from "./ListProductsUseCase";

export class ListProductsController {
  async handle(req: Request, res: Response) {
    const listProductsUseCase = new ListProductsUseCase();

    const products = await listProductsUseCase.execute();

    return res.status(200).json(products);
  }
}
