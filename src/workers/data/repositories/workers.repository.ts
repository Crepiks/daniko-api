import { Injectable } from '@nestjs/common';
import { Worker } from 'src/workers/entities/worker.entity';
import { WorkerModel } from '../models/worker.model';

@Injectable()
export class WorkersRepository {
  async findAll(): Promise<Worker[]> {
    const workers = await WorkerModel.query();
    return workers;
  }
}
