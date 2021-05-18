import { ApiProperty } from '@nestjs/swagger';

export class LoginAdminDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
