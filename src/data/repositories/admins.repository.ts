import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAdminDto } from 'src/admins/dto/create-admin.dto';
import { UpdateAdminDto } from 'src/admins/dto/update-admin.dto';
import { Admin } from 'src/entities/admin.entity';
import AdminModel from '../models/admin.model';

@Injectable()
export class AdminsRepository {
  findAll(): Promise<Admin[]> {
    return AdminModel.query();
  }

  insertAndFetch(payload: CreateAdminDto): Promise<Admin> {
    return AdminModel.query().insertAndFetch(payload);
  }

  findById(id: number): Promise<Admin> {
    return AdminModel.query().findById(id);
  }

  findByEmail(email: string): Promise<Admin> {
    return AdminModel.query().findOne({ email });
  }

  async updateByIdAndFetch(
    id: number,
    payload: UpdateAdminDto,
  ): Promise<Admin> {
    return AdminModel.query().patchAndFetchById(id, payload);
  }

  deleteById(id: number): Promise<number> {
    return AdminModel.query().deleteById(id);
  }
}
