import { Model } from 'objection';

export class ServicesModel extends Model {
  static tableName = 'services';

  id: number;
  title: string;
  description: string;
  scheduleId: number;
  createdAt: string;
}
