import { Product } from "@prisma/client";
import { AppError } from "../../../../error/AppError";
import { prisma } from "../../../../prisma/client";

interface IRequest {
  id: number;
  name: string;
  category: string;
  price: number;
}

export class UpdateProductUseCase {
  async execute({ id, name, category, price }: IRequest): Promise<void> {
    const productExist = await prisma.product.findUnique({
      where: {
        id,
      },
    });

    if (!productExist) {
      throw new AppError("Product not found!", 404);
    }

    const nameAlreadyExists = await prisma.product.findUnique({
      where: {
        name,
      },
    });

    if (nameAlreadyExists && id != nameAlreadyExists.id) {
      throw new AppError("Product name already exists!");
    }

    await prisma.product.update({
      where: {
        id,
      },
      data: {
        name,
        category,
        price,
      },
    });
  }
}
