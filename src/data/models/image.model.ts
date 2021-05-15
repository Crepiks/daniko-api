import { Model } from 'objection';

class ImageModel extends Model {
  static tableName = 'images';

  id: number;
  path: string;
  createdAt: string;
}

module.exports = ImageModel;
export default ImageModel;
