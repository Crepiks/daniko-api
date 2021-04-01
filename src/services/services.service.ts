import { Injectable } from '@nestjs/common';
import { ServicesRepository } from './data/repositories/services.repository';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Injectable()
export class ServicesService {
  constructor(private readonly servicesRepository: ServicesRepository) {}

  findAll() {
    return this.servicesRepository.findAll();
  }

  create(createServiceDto: CreateServiceDto) {
    return 'This action adds a new service';
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
