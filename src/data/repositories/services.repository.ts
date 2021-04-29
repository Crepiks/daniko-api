import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from 'src/services/dto/create-service.dto';
import { UpdateServiceDto } from 'src/services/dto/update-service.dto';
import { Service } from 'src/entities/service.entity';
import ServiceModel from '../models/service.model';

@Injectable()
export class ServicesRepository {
  findAll(): Promise<Service[]> {
    return ServiceModel.query()
      .orderBy('createdAt', 'desc')
      .withGraphFetched('schedule');
  }

  insertAndFetch(payload: CreateServiceDto): Promise<Service> {
    return ServiceModel.query().insertAndFetch(payload);
  }

  detailById(id: number): Promise<Service> {
    return ServiceModel.query().findById(id).withGraphFetched('schedule');
  }

  updateAndFetchById(id: number, payload: UpdateServiceDto): Promise<Service> {
    return ServiceModel.query().patchAndFetchById(id, payload);
  }

  deleteById(id: number): Promise<number> {
    return ServiceModel.query().deleteById(id);
  }
}
