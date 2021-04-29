import { Model } from 'objection';
import ImageModel from './image.model';
import ScheduleModel from './schedule.model';

class ServiceModel extends Model {
  static tableName = 'services';

  id: number;
  title: string;
  description: string;
  scheduleId: number;
  createdAt: string;
  images: ImageModel[];
  schedule: ScheduleModel;

  static get relationMappings() {
    const ImageModel = require('./image.model');
    const ScheduleModel = require('./schedule.model');

    return {
      images: {
        relation: Model.ManyToManyRelation,
        modelClass: ImageModel,
        join: {
          from: 'services.id',
          through: {
            from: 'service_images.serviceId',
            to: 'service_images.imageId',
          },
          to: 'images.id',
        },
      },
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
