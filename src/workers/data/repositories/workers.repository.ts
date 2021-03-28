import { Injectable } from '@nestjs/common';
import { CreateWorkerDto } from 'src/workers/dto/create-worker.dto';
import { UpdateWorkerDto } from 'src/workers/dto/update-worker.dto';
import { Worker } from 'src/workers/entities/worker.entity';
import { WorkerModel } from '../models/worker.model';

@Injectable()
export class WorkersRepository {
  async findAll(): Promise<Worker[]> {
    const workers = await WorkerModel.query().orderBy('createdAt', 'desc');
    return workers;
  }

  async insertAndFetch(payload: CreateWorkerDto): Promise<Worker> {
    const worker = await WorkerModel.query().insertAndFetch(payload);
    return worker;
  }

  async findById(id: number): Promise<Worker> {
    return WorkerModel.query().findById(id);
  }

  async updateAndFetchById(
    id: number,
    payload: UpdateWorkerDto,
  ): Promise<Worker> {
    return WorkerModel.query().patchAndFetchById(id, payload);
  }

  async deleteById(id: number): Promise<number> {
    return WorkerModel.query().deleteById(id);
  }
}
