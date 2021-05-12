import { Model } from 'objection';
import ImageModel from './image.model';
import ScheduleModel from './schedule.model';
import ServiceModel from './service.model';

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
  services: ServiceModel[];

  static get relationMappings() {
    const ImageModel = require('./image.model');
    const ScheduleModel = require('./schedule.model');
    const ServiceModel = require('./service.model');

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
      services: {
        relation: Model.ManyToManyRelation,
        modelClass: ServiceModel,
        join: {
          from: 'workers.id',
          through: {
            from: 'services_workers.workerId',
            to: 'services_workers.serviceId',
          },
          to: 'services.id',
        },
      },
    };
  }
}

module.exports = WorkerModel;
export default WorkerModel;
