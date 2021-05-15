import { Injectable } from '@nestjs/common';
import { PhotosRepository } from 'src/data/repositories/photos.repository';
import { Photo } from 'src/entities/photo.entity';

@Injectable()
export class PhotosService {
  constructor(private readonly photosRepository: PhotosRepository) {}

  findAll(): Promise<Photo[]> {
    return this.photosRepository.findAll();
  }

  create(fileName: string): Promise<Photo> {
    return this.photosRepository.insertAndFetch(fileName);
  }

  remove(id: number) {
    return `This action removes a #${id} photo`;
  }
}
