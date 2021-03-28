import { Injectable, NotFoundException } from '@nestjs/common';
import { WorkersRepository } from './data/repositories/workers.repository';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { Worker } from './entities/worker.entity';

@Injectable()
export class WorkersService {
  constructor(private readonly workersRepository: WorkersRepository) {}

  findAll(): Promise<Worker[]> {
    return this.workersRepository.findAll();
  }

  create(payload: CreateWorkerDto) {
    return this.workersRepository.insertAndFetch(payload);
  }

  async findOne(id: number) {
    const worker = await this.workersRepository.findById(id);

    if (!worker) {
      throw new NotFoundException('Worker not found');
    }

    return worker;
  }

  update(id: number, updateWorkerDto: UpdateWorkerDto) {
    return `This action updates a #${id} worker`;
  }

  remove(id: number) {
    return `This action removes a #${id} worker`;
  }
}
