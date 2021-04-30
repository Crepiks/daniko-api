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

  create(payload: CreateWorkerDto): Promise<Worker> {
    return this.workersRepository.insertAndFetch(payload);
  }

  async findOne(id: number): Promise<Worker> {
    const worker = await this.workersRepository.findById(id);

    if (!worker) {
      throw new NotFoundException('Worker not found');
    }

    return worker;
  }

  async update(id: number, payload: UpdateWorkerDto): Promise<Worker> {
    const worker = await this.workersRepository.updateAndFetchById(id, payload);

    if (!worker) {
      throw new NotFoundException('Worker not found');
    }

    return worker;
  }

  async remove(id: number): Promise<void> {
    const rowsDeleted = await this.workersRepository.deleteById(id);

    if (!rowsDeleted) {
      throw new NotFoundException('Worker not found');
    }
  }
}
