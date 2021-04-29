import { Injectable } from '@nestjs/common';
import { Photo } from 'src/entities/photo.entity';
import PhotoModel from '../models/photo.model';

@Injectable()
export class PhotosRepository {
  findAll(): Promise<Photo[]> {
    return PhotoModel.query().orderBy('createdAt', 'desc');
  }
}
