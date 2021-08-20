import { ApiProperty } from '@nestjs/swagger';

class CreateScheduleDto {
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

export class CreateServiceDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  schedule: CreateScheduleDto;

  @ApiProperty({ type: [Number] })
  workersIds: number[];
}
