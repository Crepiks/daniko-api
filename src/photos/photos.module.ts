import { Module } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { PhotosController } from './photos.controller';
import { RepositoriesModule } from 'src/data/repositories/repositories.module';
import { UploadsModule } from 'src/uploads/uploads.module';

@Module({
  imports: [RepositoriesModule, UploadsModule],
  controllers: [PhotosController],
  providers: [PhotosService],
})
export class PhotosModule {}
