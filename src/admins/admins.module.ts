import { Module } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { AdminsController } from './admins.controller';
import { AdminsRepository } from './data/repositories/admins.repository';

@Module({
  controllers: [AdminsController],
  providers: [AdminsService, AdminsRepository],
})
export class AdminsModule {}
