import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AdminsModule } from './admins/admins.module';
import { DatabaseModule } from './database/database.module';
import { WorkersModule } from './workers/workers.module';
import { ServicesModule } from './services/services.module';
import { RepositoriesModule } from './data/repositories/repositories.module';
import { PhotosModule } from './photos/photos.module';
import { UploadsModule } from './uploads/uploads.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'uploads'),
    }),
    AdminsModule,
    DatabaseModule,
    WorkersModule,
    ServicesModule,
    RepositoriesModule,
    PhotosModule,
    UploadsModule,
  ],
})
export class AppModule {}
