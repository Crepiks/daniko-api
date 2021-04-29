import { Schedule } from './schedule.entity';

export class Worker {
  id: number;
  firstName: string;
  lastName: string;
  branch: string;
  description: string;
  schedule: Schedule;
}
