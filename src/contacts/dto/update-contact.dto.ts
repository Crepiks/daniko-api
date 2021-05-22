import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateContactDto {
  @ApiPropertyOptional()
  phone: string;

  @ApiPropertyOptional()
  email: string;

  @ApiPropertyOptional()
  postIndex: string;

  @ApiPropertyOptional()
  address: string;

  @ApiPropertyOptional()
  lat: number;

  @ApiPropertyOptional()
  lon: number;
}
