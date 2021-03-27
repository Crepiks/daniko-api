import { Model } from 'objection';

export class AdminModel extends Model {
  static tableName = 'admins';

  id!: number;
  firstName!: string;
  lastName!: string;
  email!: string;
  emailConfirmedAt!: string;
  password!: string;
  createdAt!: string;
}
