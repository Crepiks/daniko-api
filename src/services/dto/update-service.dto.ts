import { ApiProperty } from '@nestjs/swagger';

class UpdateScheduleDto {
  @ApiProperty()
  monday: string;

  @ApiProperty()
  tuesday: string;

  @ApiProperty()
  wednesday: string;

  @ApiProperty()
  thursday: string;

  @ApiProperty()
  friday: string;

  @ApiProperty()
  saturday: string;

  @ApiProperty()
  sunday: string;
}

export class UpdateServiceDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  schedule: UpdateScheduleDto;

  @ApiProperty({ type: [Number] })
  workersIds: number[];
}
