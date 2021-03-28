import { Injectable } from '@nestjs/common';
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

  create(createWorkerDto: CreateWorkerDto) {
    return 'This action adds a new worker';
  }

  findOne(id: number) {
    return `This action returns a #${id} worker`;
  }

  update(id: number, updateWorkerDto: UpdateWorkerDto) {
    return `This action updates a #${id} worker`;
  }

  remove(id: number) {
    return `This action removes a #${id} worker`;
  }
}
