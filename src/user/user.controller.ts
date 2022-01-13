import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { User } from './user.entity';
import { CreateUser } from './user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
  @Post()
  @ApiBody({ type: CreateUser })
  createUser(
    @Body()
    userData: CreateUser,
  ): Promise<void> {
    return this.userService.createOne(userData);
  }
  @Post('many')
  @ApiBody({ type: [CreateUser] })
  createUserMany(
    @Body()
    userData: CreateUser[],
  ): Promise<void> {
    return this.userService.createMany(userData);
  }
}
