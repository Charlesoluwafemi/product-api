import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { ProductRepository } from './product.repository'; // Import the repository

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(async () => {
    // Create a NestJS testing module to isolate ProductsService and its dependencies
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,                // Include ProductsService itself
        {
          provide: ProductRepository,  // Provide ProductRepository as a provider
          useValue: {},                // Mock or use a real repository instance as per your testing needs
        },
      ],
    }).compile();

    // Retrieve an instance of ProductsService from the testing module
    service = module.get<ProductsService>(ProductsService);
  });

  // Test to verify that the ProductsService is defined
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Add more test cases for ProductsService as needed
  // Example: Test service methods, integration with ProductRepository, etc.
});
