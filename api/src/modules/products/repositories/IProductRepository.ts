import { IProductDTO } from "../dtos/IProductDTO";
import { Product } from "../infra/typeorm/entities/Product";

interface IProductRepository {
  create(data: IProductDTO): Promise<Product>;
  list(): Promise<Product[]>;
  findById(id: number): Promise<Product>;
  update(id: number, data: IProductDTO): Promise<Product>;
  delete(id: number): Promise<void>;
}

export { IProductRepository };