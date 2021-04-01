import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from 'src/services/dto/create-service.dto';
import { UpdateServiceDto } from 'src/services/dto/update-service.dto';
import { Service } from 'src/services/entities/service.entity';
import { ServicesModel } from '../models/services.model';

@Injectable()
export class ServicesRepository {
  findAll(): Promise<Service[]> {
    return ServicesModel.query().orderBy('createdAt', 'desc');
  }

  insertAndFetch(payload: CreateServiceDto): Promise<Service> {
    return ServicesModel.query().insertAndFetch(payload);
  }

  detailById(id: number): Promise<Service> {
    return ServicesModel.query().findById(id);
  }

  updateAndFetchById(id: number, payload: UpdateServiceDto): Promise<Service> {
    return ServicesModel.query().patchAndFetchById(id, payload);
  }

  deleteById(id: number): Promise<number> {
    return ServicesModel.query().deleteById(id);
  }
}
