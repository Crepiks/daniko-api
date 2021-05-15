import { Injectable, NotFoundException } from '@nestjs/common';
import { PhotosRepository } from 'src/data/repositories/photos.repository';
import { Photo } from 'src/entities/photo.entity';
import { UploadsService } from 'src/uploads/uploads.service';

@Injectable()
export class PhotosService {
  constructor(
    private readonly photosRepository: PhotosRepository,
    private readonly uploadsService: UploadsService,
  ) {}

  findAll(): Promise<Photo[]> {
    return this.photosRepository.findAll();
  }

  create(fileName: string): Promise<Photo> {
    return this.photosRepository.insertAndFetch(fileName);
  }

  async remove(id: number): Promise<void> {
    const photo = await this.photosRepository.findById(id);
    if (!photo) {
      throw new NotFoundException('Photo not found');
    }

    await this.uploadsService.deleteFile(photo.image.path);
    await this.photosRepository.deleteById(photo.id);
  }
}
