import { Model } from 'objection';

class PhotoModel extends Model {
  static tableName = 'photos';

  id: number;
  imageId: number;
  createdAt: string;
}

module.exports = PhotoModel;
export default PhotoModel;
