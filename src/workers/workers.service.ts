import { Injectable, NotFoundException } from '@nestjs/common';
import { WorkersRepository } from '../data/repositories/workers.repository';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { Worker } from '../entities/worker.entity';
import { UploadsService } from 'src/uploads/uploads.service';

@Injectable()
export class WorkersService {
  constructor(
    private readonly workersRepository: WorkersRepository,
    private readonly uploadsService: UploadsService,
  ) {}

  findAll(): Promise<Worker[]> {
    return this.workersRepository.findAll();
  }

  async create(payload: CreateWorkerDto): Promise<Worker> {
    const { servicesIds, ...workerPayload } = payload;
    let worker = await this.workersRepository.insertAndFetch(workerPayload);
    if (servicesIds) {
      await this.workersRepository.relateServicesToWorker(
        worker.id,
        servicesIds,
      );
    }

    worker = await this.workersRepository.detailById(worker.id);

    return worker;
  }

  async findOne(id: number): Promise<Worker> {
    const worker = await this.workersRepository.detailById(id);

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

    worker = await this.workersRepository.detailById(worker.id);

    return worker;
  }

  async remove(id: number): Promise<void> {
    const rowsDeleted = await this.workersRepository.deleteById(id);

    if (!rowsDeleted) {
      throw new NotFoundException('Worker not found');
    }
  }

  async setImage(id: number, fileName: string): Promise<Worker> {
    let worker = await this.workersRepository.detailById(id);

    if (!worker) {
      throw new NotFoundException('Worker not found');
    }

    if (worker.image) {
      await this.uploadsService.deleteFile(worker.image.path);

      await this.workersRepository.updateImage(worker.id, fileName);
    } else {
      await this.workersRepository.insertImage(worker.id, fileName);
    }

    worker = await this.workersRepository.detailById(id);

    return worker;
  }
}
