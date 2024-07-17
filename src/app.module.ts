import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UserService } from './users/user.service';
import { AuthService } from './auth/auth.service';
import { JwtStrategy } from './auth/jwt.strategy';
import { User } from './users/user.entity';
import { jwtConstants } from './auth/jwt.constants'; // Adjusted import path based on project structure

import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'product_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]), // Inject User entity into TypeORM
    PassportModule.register({ defaultStrategy: 'jwt' }), // Register Passport with default JWT strategy
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' }, // Token expiration time
    }),
    ProductsModule, // Include the ProductsModule which handles product-related functionality
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UserService, AuthService, JwtStrategy],
})
export class AppModule {}

