import { Image } from './image.entity';

export class Photo {
  id: number;
  imageId: number;
  createdAt: string;
  image: Image;
}
