import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';

/**
 * Controller responsible for handling product-related HTTP requests.
 * This controller defines endpoints for CRUD operations on products.
 */
@Controller('products')
export class ProductsController {
  /**
   * The constructor injects the ProductsService, which provides methods to handle the business logic for products.
   * @param productsService - The service to handle product-related operations.
   */
  constructor(private readonly productsService: ProductsService) {}

  /**
   * Handles GET requests to retrieve all products.
   * @returns A promise that resolves to an array of all products.
   */
  @Get()
  async findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  /**
   * Handles GET requests to retrieve a single product by its ID.
   * @param id - The ID of the product to retrieve.
   * @returns A promise that resolves to the product with the specified ID.
   */
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Product> {
    return this.productsService.findOne(id);
  }

  /**
   * Handles POST requests to create a new product.
   * @param product - The product data to create a new product.
   * @returns A promise that resolves to the created product.
   */
  @Post()
  async create(@Body() product: Product): Promise<Product> {
    return this.productsService.create(product);
  }

  /**
   * Handles PUT requests to update an existing product by its ID.
   * @param id - The ID of the product to update.
   * @param product - The new product data to update the existing product.
   * @returns A promise that resolves to the updated product.
   */
  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() product: Product): Promise<Product> {
    return this.productsService.update(id, product);
  }

  /**
   * Handles DELETE requests to remove a product by its ID.
   * @param id - The ID of the product to remove.
   * @returns A promise that resolves to void once the product is removed.
   */
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.productsService.remove(id);
  }
}
