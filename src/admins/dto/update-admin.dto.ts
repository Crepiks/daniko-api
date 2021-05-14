import { ApiProperty } from '@nestjs/swagger';

export class UpdateAdminDto {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;
}
