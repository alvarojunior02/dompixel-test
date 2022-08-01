import { Product } from "@prisma/client";
import { AppError } from "../../../../error/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateProductDTO } from "../../dtos/CreateProductDTO";

export class CreateProductUseCase {
  async execute({ name, category, price }: CreateProductDTO): Promise<Product> {
    const nameAlreadyExists = await prisma.product.findUnique({
      where: {
        name,
      },
    });

    if (nameAlreadyExists) {
      throw new AppError("Product name already exists");
    }

    const product = await prisma.product.create({
      data: {
        name,
        category,
        price,
      },
    });

    return product;
  }
}
