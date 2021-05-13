class CreateScheduleDto {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

export class CreateServiceDto {
  title: string;
  description: string;
  schedule: CreateScheduleDto;
  workersIds: number[];
}
