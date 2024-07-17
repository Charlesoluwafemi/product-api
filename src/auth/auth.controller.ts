// AuthController handles authentication routes and requests.
import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { User } from '../users/user.entity';

@Controller('auth') // Defines the base route for authentication endpoints.
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Handles POST requests to '/auth/login' for user authentication.
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user); // Delegates login logic to the injected AuthService.
  }
}
