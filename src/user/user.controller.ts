import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): string {
    return this.userService.getHello();
  }
  @Post()
  createUser(
    @Body()
    userData: {
      firstName: string;
      lastName: string;
      isActive: boolean;
    },
  ): Promise<void> {
    return this.userService.createOne(userData);
  }
}
