import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

// Service managing user-related operations
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // Find user by username
  async findOne(username: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { username } });
  }

  // Validate user credentials
  async validateUser(username: string, password: string): Promise<User | undefined> {
    const user = await this.findOne(username);
    if (user && bcrypt.compareSync(password, user.password)) {
      return user;
    }
    return undefined;
  }

  // Placeholder method to find user by username (actual implementation depends on database)
  async findByUsername(username: string): Promise<User | null> {
    return null; // Replace with actual logic
  }
}
