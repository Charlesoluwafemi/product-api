import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

/**
 * Service responsible for handling business logic related to products.
 * This service provides methods to perform CRUD operations on products.
 */
@Injectable()
export class ProductsService {
  /**
   * The constructor injects the Product repository, which allows interaction with the database.
   * @param productsRepository - The repository to handle product-related database operations.
   */
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  /**
   * Retrieves all products from the database.
   * @returns A promise that resolves to an array of all products.
   */
  async findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  /**
   * Retrieves a single product by its ID from the database.
   * @param id - The ID of the product to retrieve.
   * @returns A promise that resolves to the product with the specified ID.
   */
  async findOne(id: number): Promise<Product> {
    const product = await this.productsRepository.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }

  /**
   * Creates a new product in the database.
   * @param product - The product data to create.
   * @returns A promise that resolves to the created product.
   */
  async create(product: Product): Promise<Product> {
    const newProduct = this.productsRepository.create(product);
    return this.productsRepository.save(newProduct);
  }

  /**
   * Updates an existing product in the database.
   * @param id - The ID of the product to update.
   * @param product - The new product data to update the existing product.
   * @returns A promise that resolves to the updated product.
   */
  async update(id: number, product: Product): Promise<Product> {
    const existingProduct = await this.productsRepository.findOne({ where: { id } });
    if (!existingProduct) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    const updatedProduct = this.productsRepository.merge(existingProduct, product);
    return this.productsRepository.save(updatedProduct);
  }

  /**
   * Removes a product by its ID from the database.
   * @param id - The ID of the product to remove.
   * @returns A promise that resolves to void once the product is removed.
   */
  async remove(id: number): Promise<void> {
    const result = await this.productsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
  }
}
