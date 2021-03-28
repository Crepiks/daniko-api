import { Model } from 'objection';

export class WorkerModel extends Model {
  static tableName = 'workers';

  id: number;
  firstName: string;
  lastName: string;
  branch: string;
  description: string;
  imageId: number;
  createdAt: string;
}
