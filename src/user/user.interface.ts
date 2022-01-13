import { ApiProperty } from '@nestjs/swagger';

export class CreateUser {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  isActive: boolean;
}
