import { Module } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { RepositoriesModule } from 'src/data/repositories/repositories.module';
import { UploadsModule } from 'src/uploads/uploads.module';

@Module({
  imports: [RepositoriesModule, UploadsModule],
  controllers: [ServicesController],
  providers: [ServicesService],
})
export class ServicesModule {}
