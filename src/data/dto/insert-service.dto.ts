class InsertScheduleDto {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

export class InsertServiceDto {
  title: string;
  description: string;
  schedule: InsertScheduleDto;
}
