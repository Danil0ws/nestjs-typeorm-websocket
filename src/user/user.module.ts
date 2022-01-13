import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database/database.module';
import { UserController } from './user.controller';
import { userProviders } from './user.providers';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule, DatabaseModule],
  controllers: [UserController],
  providers: [...userProviders, UserService],
  exports: [TypeOrmModule],
})
export class UserModule {}
