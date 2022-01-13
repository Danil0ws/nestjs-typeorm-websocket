import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';

type CreateUserParams = Pick<User, 'firstName' | 'lastName' | 'isActive'>;
@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private usersRepository: Repository<User>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async createMany(users: CreateUserParams[]) {
    users.map(async (user) => await this.usersRepository.manager.save(user[0]));
  }

  async createOne(user: CreateUserParams) {
    await this.usersRepository.save(user);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
