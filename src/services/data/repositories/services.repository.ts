import { Injectable } from '@nestjs/common';
import { Service } from 'src/services/entities/service.entity';
import { ServicesModel } from '../models/services.model';

@Injectable()
export class ServicesRepository {
  async findAll(): Promise<Service[]> {
    return ServicesModel.query().orderBy('createdAt', 'desc');
  }
}
