import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../users/user.service';
import { User } from '../users/user.entity';
import { jwtConstants } from './jwt.constants';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  // Validates a user's credentials against the database.
  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.validateUser(username, password);
    if (user) {
      const { password, ...result } = user; // Remove password from user object before returning
      return result;
    }
    return null;
  }

  // Logs in a user and returns an access token.
  async login(user: User) {
    const payload = { username: user.username, sub: user.id }; // Create JWT payload
    return {
      access_token: this.jwtService.sign(payload), // Sign payload to generate access token
    };
  }
}
