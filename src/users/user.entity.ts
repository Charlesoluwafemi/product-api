import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn() // Auto-generates primary key
  id: number;

  @Column() // Defines a column in the database table for username
  username: string;

  @Column() // Defines a column in the database table for password
  password: string;
}
