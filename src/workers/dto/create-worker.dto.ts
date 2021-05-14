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

export class CreateWorkerDto {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  branch: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  schedule: CreateScheduleDto;

  @ApiProperty({ type: [Number] })
  servicesIds: number[];
}
