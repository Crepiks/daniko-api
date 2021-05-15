import { Injectable, NotFoundException, Post } from '@nestjs/common';
import { Service } from '../entities/service.entity';
import { ServicesRepository } from '../data/repositories/services.repository';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Image } from 'src/entities/image.entity';

@Injectable()
export class ServicesService {
  constructor(private readonly servicesRepository: ServicesRepository) {}

  findAll(): Promise<Service[]> {
    return this.servicesRepository.findAll();
  }

  async create(payload: CreateServiceDto): Promise<Service> {
    const { workersIds, ...servicePayload } = payload;
    let service = await this.servicesRepository.insertAndFetch(servicePayload);
    if (workersIds) {
      await this.servicesRepository.relateWorkersToService(
        service.id,
        workersIds,
      );
    }
    service = await this.servicesRepository.detailById(service.id);

    return service;
  }

  async findOne(id: number): Promise<Service> {
    const service = await this.servicesRepository.detailById(id);

    if (!service) {
      throw new NotFoundException('Service not found');
    }

    return service;
  }

  async update(id: number, payload: UpdateServiceDto): Promise<Service> {
    const { workersIds, ...servicePayload } = payload;
    let service = await this.servicesRepository.updateAndFetchById(
      id,
      servicePayload,
    );

    if (!service) {
      throw new NotFoundException('Service not found');
    }

    if (workersIds) {
      await this.servicesRepository.unrelateAllWorkersFromService(service.id);
      await this.servicesRepository.relateWorkersToService(
        service.id,
        workersIds,
      );
    }

    service = await this.servicesRepository.detailById(service.id);

    return service;
  }

  async remove(id: number): Promise<void> {
    const rowsDeleted = await this.servicesRepository.deleteById(id);

    if (!rowsDeleted) {
      throw new NotFoundException('Service not found');
    }
  }

  async uploadImage(id: number, fileName: string): Promise<Image> {
    const service = await this.servicesRepository.findById(id);

    if (!service) {
      throw new NotFoundException('Service not found');
    }

    const image = await this.servicesRepository.insertImage(service.id, {
      path: fileName,
    });

    return image;
  }
}
