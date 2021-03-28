import { Module } from '@nestjs/common';
import { WorkersService } from './workers.service';
import { WorkersController } from './workers.controller';
import { WorkersRepository } from './data/repositories/workers.repository';

@Module({
  controllers: [WorkersController],
  providers: [WorkersService, WorkersRepository],
})
export class WorkersModule {}
