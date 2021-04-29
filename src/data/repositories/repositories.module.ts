import { Module } from '@nestjs/common';
import { AdminsRepository } from './admins.repository';
import { ServicesRepository } from './services.repository';
import { WorkersRepository } from './workers.repository';

@Module({
  providers: [AdminsRepository, ServicesRepository, WorkersRepository],
  exports: [AdminsRepository, ServicesRepository, WorkersRepository],
})
export class RepositoriesModule {}
