// user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findOne(username: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { username } });
  }

  async validateUser(username: string, password: string): Promise<User | undefined> {
    const user = await this.findOne(username);
    if (user && bcrypt.compareSync(password, user.password)) {
      return user;
    }
    return undefined;
  }


  async findByUsername(username: string): Promise<User | null> {
    // Implementation of findByUsername method
    // Example: Fetch user from database or return null if not found
    return null; // Replace with actual logic
  }
}