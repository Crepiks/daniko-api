class CreateScheduleDto {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

export class InsertWorkerDto {
  firstName: string;
  lastName: string;
  branch: string;
  description: string;
  schedule: CreateScheduleDto;
}
