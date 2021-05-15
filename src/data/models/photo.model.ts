import { Model } from 'objection';
import ImageModel from './image.model';

class PhotoModel extends Model {
  static tableName = 'photos';

  id: number;
  imageId: number;
  createdAt: string;
  image: ImageModel;

  static get relationMappings() {
    const ImageModel = require('./image.model');

    return {
      image: {
        relation: Model.BelongsToOneRelation,
        modelClass: ImageModel,
        join: {
          from: 'photos.imageId',
          to: 'images.id',
        },
      },
    };
  }
}

module.exports = PhotoModel;
export default PhotoModel;
