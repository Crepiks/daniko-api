import { Model } from 'objection';
import ImageModel from './image.model';
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
  image: ImageModel;
  schedule: ScheduleModel;

  static get relationMappings() {
    const ImageModel = require('./image.model');
    const ScheduleModel = require('./schedule.model');

    return {
      image: {
        relation: Model.BelongsToOneRelation,
        modelClass: ImageModel,
        join: {
          from: 'workers.imageId',
          to: 'images.id',
        },
      },
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
