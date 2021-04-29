import { Injectable } from '@nestjs/common';
import { PhotosRepository } from 'src/data/repositories/photo.repository';
import { Photo } from 'src/entities/photo.entity';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';

@Injectable()
export class PhotosService {
  constructor(private readonly photosRepository: PhotosRepository) {}

  findAll(): Promise<Photo[]> {
    return this.photosRepository.findAll();
  }

  create(payload: CreatePhotoDto) {
    return 'This action adds a new photo';
  }

  findOne(id: number) {
    return `This action returns a #${id} photo`;
  }

  update(id: number, payload: UpdatePhotoDto) {
    return `This action updates a #${id} photo`;
  }

  remove(id: number) {
    return `This action removes a #${id} photo`;
  }
}
