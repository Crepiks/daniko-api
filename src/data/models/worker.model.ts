import { Model } from 'objection';
import ScheduleModel from './schedule.model';

class WorkerModel extends Model {
  static tableName = 'workers';

  id: number;
  firstName: string;
  lastName: string;
  branch: string;
  description: string;
  imageId: number;
  scheduleId: number;
  createdAt: string;
  schedule: ScheduleModel;

  static get relationMappings() {
    const ScheduleModel = require('./schedule.model');

    return {
      schedule: {
        relation: Model.BelongsToOneRelation,
        modelClass: ScheduleModel,
        join: {
          from: 'workers.scheduleId',
          to: 'schedules.id',
        },
      },
    };
  }
}

module.exports = WorkerModel;
export default WorkerModel;
