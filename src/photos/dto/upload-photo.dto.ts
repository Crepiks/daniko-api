import { ApiProperty } from '@nestjs/swagger';

export class UploadPhotoDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  image: any;
}
