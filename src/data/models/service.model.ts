import { Model } from 'objection';

class ServiceModel extends Model {
  static tableName = 'services';

  id: number;
  title: string;
  description: string;
  scheduleId: number;
  createdAt: string;
}

module.exports = ServiceModel;
export default ServiceModel;
