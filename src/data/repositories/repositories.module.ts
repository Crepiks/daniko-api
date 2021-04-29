import { Module } from '@nestjs/common';
import { AdminsRepository } from './admins.repository';
import { PhotosRepository } from './photo.repository';
import { ServicesRepository } from './services.repository';
import { WorkersRepository } from './workers.repository';

@Module({
  providers: [
    AdminsRepository,
    ServicesRepository,
    WorkersRepository,
    PhotosRepository,
  ],
  exports: [
    AdminsRepository,
    ServicesRepository,
    WorkersRepository,
    PhotosRepository,
  ],
})
export class RepositoriesModule {}
