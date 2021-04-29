import { Model } from 'objection';

class ScheduleModel extends Model {
  static tableName = 'schedules';

  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

module.exports = ScheduleModel;
export default ScheduleModel;
