import { Injectable } from '@nestjs/common';
import { CreateWorkerDto } from 'src/workers/dto/create-worker.dto';
import { UpdateWorkerDto } from 'src/workers/dto/update-worker.dto';
import { Worker } from 'src/entities/worker.entity';
import WorkerModel from '../models/worker.model';

@Injectable()
export class WorkersRepository {
  findAll(): Promise<Worker[]> {
    return WorkerModel.query().orderBy('createdAt', 'desc').withGraphFetched({
      image: true,
      schedule: true,
    });
  }

  insertAndFetch(payload: CreateWorkerDto): Promise<Worker> {
    return WorkerModel.query().insertGraph(payload);
  }

  findById(id: number): Promise<Worker> {
    return WorkerModel.query().findById(id).withGraphFetched({
      image: true,
      schedule: true,
    });
  }

  updateAndFetchById(id: number, payload: UpdateWorkerDto): Promise<Worker> {
    return WorkerModel.query().upsertGraph({
      id,
      ...payload,
    });
  }

  deleteById(id: number): Promise<number> {
    return WorkerModel.query().deleteById(id);
  }
}
