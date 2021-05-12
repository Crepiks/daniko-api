import { Injectable } from '@nestjs/common';
import { InsertWorkerDto } from '../dto/insert-worker.dto';
import { UpdateWorkerDto } from '../dto/update-worker.dto';
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

  insertAndFetch(payload: InsertWorkerDto): Promise<Worker> {
    return WorkerModel.query().insertGraph(payload);
  }

  async relateServicesToWorker(
    workerId: number,
    servicesIds: number[],
  ): Promise<void> {
    const worker = WorkerModel.query().findById(workerId);
    if (!worker) return;
    const queries = servicesIds.map((serviceId) =>
      this.relateServiceToWorker(workerId, serviceId),
    );
    await Promise.all(queries);
  }

  relateServiceToWorker(workerId: number, serviceId: number): Promise<number> {
    return WorkerModel.relatedQuery('services').for(workerId).relate(serviceId);
  }

  unrelateAllServicesFromWorker(workerId: number) {
    return WorkerModel.relatedQuery('services').for(workerId).unrelate();
  }

  findById(id: number): Promise<Worker> {
    return WorkerModel.query().findById(id).withGraphFetched({
      image: true,
      schedule: true,
      services: true,
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
