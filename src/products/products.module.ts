import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from './product.entity';

/**
 * The ProductsModule is responsible for encapsulating all product-related components,
 * including the service, controller, and entity definitions.
 * This module imports TypeOrmModule to enable interaction with the database using TypeORM.
 */
@Module({
  // Imports TypeOrmModule and registers the Product entity with it.
  imports: [TypeOrmModule.forFeature([Product])],

  // Registers the ProductsService as a provider.
  // Providers are injectable classes that can be shared across the module.
  providers: [ProductsService],

  // Registers the ProductsController to handle incoming HTTP requests related to products.
  controllers: [ProductsController],
})
export class ProductsModule {}

