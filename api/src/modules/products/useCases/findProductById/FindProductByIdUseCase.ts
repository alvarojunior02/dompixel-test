import { Product } from "@prisma/client";
import { AppError } from "../../../../error/AppError";
import { prisma } from "../../../../prisma/client";

export class FindProductByIdUseCase {
  async execute(id: number): Promise<Product> {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    });

    if (!product) {
      throw new AppError("Product not found!", 404);
    }

    return product;
  }
}
