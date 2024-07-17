import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UserService } from '../users/user.service';
import { JwtService } from '@nestjs/jwt'; // Import JwtService

describe('AuthService', () => {
  let authService: AuthService;
  let userService: UserService;

  beforeEach(async () => {
    // Create a NestJS testing module to isolate AuthService and its dependencies
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,    // AuthService to be tested
        UserService,   // UserService needed by AuthService
        JwtService,    // JwtService needed by AuthService
      ],
    }).compile();

    // Retrieve instances of AuthService and UserService from the testing module
    authService = module.get<AuthService>(AuthService);
    userService = module.get<UserService>(UserService);
  });

  // Add your test cases here
});
