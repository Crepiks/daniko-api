import { Injectable, NotFoundException } from '@nestjs/common';
import { WorkersRepository } from '../data/repositories/workers.repository';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { Worker } from '../entities/worker.entity';

@Injectable()
export class WorkersService {
  constructor(private readonly workersRepository: WorkersRepository) {}

  findAll(): Promise<Worker[]> {
    return this.workersRepository.findAll();
  }

  async create(payload: CreateWorkerDto): Promise<Worker> {
    const { servicesIds, ...workerPayload } = payload;
    let worker = await this.workersRepository.insertAndFetch(workerPayload);
    await this.workersRepository.relateServicesToWorker(worker.id, servicesIds);
    worker = await this.workersRepository.findById(worker.id);

    return worker;
  }

  async findOne(id: number): Promise<Worker> {
    const worker = await this.workersRepository.findById(id);

    if (!worker) {
      throw new NotFoundException('Worker not found');
    }

    return worker;
  }

  async update(id: number, payload: UpdateWorkerDto): Promise<Worker> {
    const { servicesIds, ...workerPayload } = payload;
    let worker = await this.workersRepository.updateAndFetchById(
      id,
      workerPayload,
    );

    if (!worker) {
      throw new NotFoundException('Worker not found');
    }

    if (servicesIds) {
      await this.workersRepository.unrelateAllServicesFromWorker(worker.id);
      await this.workersRepository.relateServicesToWorker(
        worker.id,
        servicesIds,
      );
    }

    worker = await this.workersRepository.findById(worker.id);

    return worker;
  }

  async remove(id: number): Promise<void> {
    const rowsDeleted = await this.workersRepository.deleteById(id);

    if (!rowsDeleted) {
      throw new NotFoundException('Worker not found');
    }
  }
}
