import { Injectable, NotFoundException } from '@nestjs/common';
import { Service } from './entities/service.entity';
import { ServicesRepository } from './data/repositories/services.repository';
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

  update(id: number, updateServiceDto: UpdateServiceDto) {
    return `This action updates a #${id} service`;
  }

  remove(id: number) {
    return `This action removes a #${id} service`;
  }
}
