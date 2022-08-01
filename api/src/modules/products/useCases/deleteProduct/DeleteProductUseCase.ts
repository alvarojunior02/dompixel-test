import { Product } from "@prisma/client";
import { AppError } from "../../../../error/AppError";
import { prisma } from "../../../../prisma/client";

export class DeleteProductUseCase {
  async execute(idToDelete: number): Promise<void> {
    const product = await prisma.product.findUnique({
      where: {
        id: idToDelete,
      },
    });

    if (!product) {
      throw new AppError("Product not found!", 404);
    }

    await prisma.product.delete({
      where: {
        id: idToDelete,
      },
    });
  }
}
