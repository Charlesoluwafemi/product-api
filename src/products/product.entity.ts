import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Product entity represents the product data in the database.
 * This class is mapped to the 'products' table in the database.
 */
@Entity()
export class Product {
  /**
   * Primary key for the Product entity.
   * The value is automatically generated by the database.
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Name of the product.
   * This is a required field and will be stored as a string in the database.
   */
  @Column({ nullable: false })
  name: string;

  /**
   * Description of the product.
   * This is a required field and will be stored as a string in the database.
   */
  @Column({ nullable: false })
  description: string;

  /**
   * Price of the product.
   * This field is stored as a decimal in the database to accurately represent currency values.
   */
  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  /**
   * URL of the product's image.
   * This is a required field and will be stored as a string in the database.
   */
  @Column({ nullable: false })
  imageUrl: string;
}