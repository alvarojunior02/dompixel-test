import { Request, Response } from "express";
import { FindProductByIdUseCase } from "./FindProductByIdUseCase";

export class FindProductByIdController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const findProductByIdUseCase = new FindProductByIdUseCase();

    const product = await findProductByIdUseCase.execute(parseInt(id, 10));

    return res.status(200).json(product);
  }
}
