class UpdateScheduleDto {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

export class UpdateWorkerDto {
  firstName: string;
  lastName: string;
  branch: string;
  description: string;
  schedule: UpdateScheduleDto;
}
