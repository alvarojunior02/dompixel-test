import { getRepository, Repository } from "typeorm";

import { IProductDTO } from "../../../dtos/IProductDTO";
import { IProductRepository } from "../../../repositories/IProductRepository";
import { Product } from "../entities/Product";

class ProductRepository implements IProductRepository {
  repository: Repository<Product>;

  constructor() {
    this.repository = getRepository(Product);
  }

  async create(data: IProductDTO): Promise<Product> {
    const { name, category, price } = data;

    const newProduct = await this.repository.create({
      name,
      category,
      price,
    });

    await this.repository.save(newProduct);

    return newProduct;
  }

  async list(): Promise<Product[]> {
    const products = await this.repository.find();

    return products;
  }

  async findById(id: number): Promise<Product> {
    const product = await this.repository.findOne({
      where: {
        id
      }
    });

    return product;
  }

  async update(id: number, data: IProductDTO): Promise<Product> {
    const { name, category, price } = data;

    await this.repository.update(id, {
      name,
      category,
      price,
    });

    const updatedProduct = this.findById(id);

    return updatedProduct;
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}

export { ProductRepository };
