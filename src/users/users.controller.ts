import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';

// Controller for managing user-related endpoints
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  // Endpoint to fetch all users, guarded by authentication
  @Get()
  @UseGuards(AuthGuard())
  findAll(): string {
    return 'This action returns all users';
  }
}
