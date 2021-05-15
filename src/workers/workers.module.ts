import { Module } from '@nestjs/common';
import { WorkersService } from './workers.service';
import { WorkersController } from './workers.controller';
import { RepositoriesModule } from 'src/data/repositories/repositories.module';
import { UploadsModule } from 'src/uploads/uploads.module';

@Module({
  imports: [RepositoriesModule, UploadsModule],
  controllers: [WorkersController],
  providers: [WorkersService],
})
export class WorkersModule {}
