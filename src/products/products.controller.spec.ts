import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductRepository } from './product.repository'; // Import the repository

describe('ProductsController', () => {
  let controller: ProductsController;

  beforeEach(async () => {
    // Create a NestJS testing module to isolate ProductsController and its dependencies
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController], // Register ProductsController
      providers: [ProductsService, ProductRepository], // Provide ProductsService and ProductRepository
    }).compile();

    // Retrieve an instance of ProductsController from the testing module
    controller = module.get<ProductsController>(ProductsController);
  });

  // Test to verify that the ProductsController is defined
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // Add more test cases for ProductsController as needed
  // Example: Test controller methods, mock requests, etc.
});
