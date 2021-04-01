import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from 'src/services/dto/create-service.dto';
import { UpdateServiceDto } from 'src/services/dto/update-service.dto';
import { Service } from 'src/services/entities/service.entity';
import { ServicesModel } from '../models/services.model';

@Injectable()
export class ServicesRepository {
  async findAll(): Promise<Service[]> {
    return ServicesModel.query().orderBy('createdAt', 'desc');
  }

  async insertAndFetch(payload: CreateServiceDto): Promise<Service> {
    return ServicesModel.query().insertAndFetch(payload);
  }

  async detailById(id: number): Promise<Service> {
    return ServicesModel.query().findById(id);
  }

  async updateAndFetchById(
    id: number,
    payload: UpdateServiceDto,
  ): Promise<Service> {
    return ServicesModel.query().patchAndFetchById(id, payload);
  }
}
