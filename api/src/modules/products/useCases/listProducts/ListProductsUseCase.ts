import { Product } from "@prisma/client";
import { AppError } from "../../../../error/AppError";
import { prisma } from "../../../../prisma/client";

export class ListProductsUseCase {
  async execute(): Promise<Product[]> {
    const products = await prisma.product.findMany();

    if (products.length === 0) {
      throw new AppError("None exist any Product!");
    }

    return products;
  }
}
