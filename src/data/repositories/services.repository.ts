import { Injectable } from '@nestjs/common';
import { InsertServiceDto } from '../dto/insert-service.dto';
import { UpdateServiceDto } from '../dto/update-service.dto';
import { Service } from 'src/entities/service.entity';
import ServiceModel from '../models/service.model';
import { InsertImageDto } from '../dto/insert-image.dto';
import { Image } from 'src/entities/image.entity';

@Injectable()
export class ServicesRepository {
  findAll(): Promise<Service[]> {
    return ServiceModel.query().orderBy('createdAt', 'desc').withGraphFetched({
      images: true,
      schedule: true,
    });
  }

  insertAndFetch(payload: InsertServiceDto): Promise<Service> {
    return ServiceModel.query().insertGraph(payload);
  }

  async relateWorkersToService(
    serviceId: number,
    workersIds: number[],
  ): Promise<void> {
    const service = await ServiceModel.query().findById(serviceId);
    if (!service) return;
    const queries = workersIds.map((id) =>
      this.relateWorkerToService(service.id, id),
    );
    await Promise.all(queries);
  }

  relateWorkerToService(serviceId: number, workerId: number): Promise<number> {
    return ServiceModel.relatedQuery('workers').for(serviceId).relate(workerId);
  }

  unrelateAllWorkersFromService(serviceId: number) {
    return ServiceModel.relatedQuery('workers').for(serviceId).unrelate();
  }

  findById(id: number): Promise<Service> {
    return ServiceModel.query().findById(id);
  }

  detailById(id: number): Promise<Service> {
    return ServiceModel.query().findById(id).withGraphFetched({
      images: true,
      schedule: true,
      workers: true,
    });
  }

  updateAndFetchById(id: number, payload: UpdateServiceDto): Promise<Service> {
    return ServiceModel.query().upsertGraph({
      id,
      ...payload,
    });
  }

  deleteById(id: number): Promise<number> {
    return ServiceModel.query().deleteById(id);
  }

  async insertImage(id: number, payload: InsertImageDto): Promise<Image> {
    const service = await ServiceModel.query().findById(id);
    if (!service) return;

    return service.$relatedQuery('images').insertAndFetch(payload);
  }

  async deleteImageById(serviceId: number, imageId: number): Promise<number> {
    const service = await ServiceModel.query().findById(serviceId);
    if (!service) return;

    return service.$relatedQuery('images').deleteById(imageId);
  }
}
