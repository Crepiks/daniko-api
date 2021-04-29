import { Injectable, NotFoundException } from '@nestjs/common';
import { Service } from './entities/service.entity';
import { ServicesRepository } from '../data/repositories/services.repository';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Injectable()
export class ServicesService {
  constructor(private readonly servicesRepository: ServicesRepository) {}

  findAll(): Promise<Service[]> {
    return this.servicesRepository.findAll();
  }

  create(payload: CreateServiceDto): Promise<Service> {
    return this.servicesRepository.insertAndFetch(payload);
  }

  async findOne(id: number): Promise<Service> {
    const service = await this.servicesRepository.detailById(id);

    if (!service) {
      throw new NotFoundException('Service not found');
    }

    return service;
  }

  async update(id: number, payload: UpdateServiceDto): Promise<Service> {
    const service = await this.servicesRepository.updateAndFetchById(
      id,
      payload,
    );

    if (!service) {
      throw new NotFoundException('Service not found');
    }

    return service;
  }

  async remove(id: number): Promise<void> {
    const rowsDeleted = await this.servicesRepository.deleteById(id);

    if (!rowsDeleted) {
      throw new NotFoundException('Service not found');
    }
  }
}
