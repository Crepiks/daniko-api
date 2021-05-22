import { Module } from '@nestjs/common';
import { AdminsRepository } from './admins.repository';
import { ContactsRepository } from './contacts.repository';
import { PhotosRepository } from './photos.repository';
import { ServicesRepository } from './services.repository';
import { WorkersRepository } from './workers.repository';

@Module({
  providers: [
    AdminsRepository,
    ServicesRepository,
    WorkersRepository,
    PhotosRepository,
    ContactsRepository,
  ],
  exports: [
    AdminsRepository,
    ServicesRepository,
    WorkersRepository,
    PhotosRepository,
    ContactsRepository,
  ],
})
export class RepositoriesModule {}
