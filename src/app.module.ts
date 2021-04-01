import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AdminsModule } from './admins/admins.module';
import { DatabaseModule } from './database/database.module';
import { WorkersModule } from './workers/workers.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AdminsModule,
    DatabaseModule,
    WorkersModule,
    ServicesModule,
  ],
})
export class AppModule {}
