import { Module } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { AdminsController } from './admins.controller';
import { RepositoriesModule } from 'src/data/repositories/repositories.module';

@Module({
  imports: [RepositoriesModule],
  controllers: [AdminsController],
  providers: [AdminsService],
})
export class AdminsModule {}
