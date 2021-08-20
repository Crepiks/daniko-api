class UpdateScheduleDto {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

export class UpdateServiceDto {
  title: string;
  description: string;
  price: number;
  schedule: UpdateScheduleDto;
}
