import { Model } from 'objection';
import ScheduleModel from './schedule.model';

class ServiceModel extends Model {
  static tableName = 'services';

  id: number;
  title: string;
  description: string;
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
          from: 'services.scheduleId',
          to: 'schedules.id',
        },
      },
    };
  }
}

module.exports = ServiceModel;
export default ServiceModel;
