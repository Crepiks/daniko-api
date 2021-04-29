import { Module } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { RepositoriesModule } from 'src/data/repositories/repositories.module';

@Module({
  imports: [RepositoriesModule],
  controllers: [ServicesController],
  providers: [ServicesService],
})
export class ServicesModule {}
