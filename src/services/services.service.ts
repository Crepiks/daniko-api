import { Injectable } from '@nestjs/common';
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

  findOne(id: number) {
    return `This action returns a #${id} service`;
  }

  update(id: number, updateServiceDto: UpdateServiceDto) {
    return `This action updates a #${id} service`;
  }

  remove(id: number) {
    return `This action removes a #${id} service`;
  }
}
