import { Schedule } from './schedule.entity';

export class Service {
  id: number;
  title: string;
  description: string;
  scheduleId: number;
  createdAt: string;
  schedule: Schedule;
}
