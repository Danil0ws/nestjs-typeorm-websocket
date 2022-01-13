import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { User } from './user.entity';

type createUserParams = Pick<User, 'firstName' | 'lastName' | 'isActive'>;
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private connection: Connection,
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

  async createMany(users: createUserParams[]) {
    await this.connection.transaction(async (manager) => {
      users.map(async (user) => await manager.save(user[0]));
    });
  }

  async createOne(user: createUserParams) {
    await this.connection.transaction(async (manager) => {
      await manager.save(user);
    });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
