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

export class UpdateWorkerDto {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  branch: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  schedule: UpdateScheduleDto;

  @ApiProperty({ type: [Number] })
  servicesIds: number[];
}
