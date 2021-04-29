import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAdminDto } from 'src/admins/dto/create-admin.dto';
import { UpdateAdminDto } from 'src/admins/dto/update-admin.dto';
import { Admin } from 'src/admins/entities/admin.entity';
import AdminModel from '../models/admin.model';

@Injectable()
export class AdminsRepository {
  async findAll(): Promise<Admin[]> {
    const admins = await AdminModel.query();
    return admins;
  }

  async insertAndFetch(payload: CreateAdminDto): Promise<Admin> {
    const admin = await AdminModel.query().insertAndFetch(payload);
    return admin;
  }

  async findById(id: number): Promise<Admin> {
    const admin = await AdminModel.query().findById(id);

    if (!admin) {
      throw new NotFoundException('Admin not found');
    }

    return admin;
  }

  async updateByIdAndFetch(
    id: number,
    payload: UpdateAdminDto,
  ): Promise<Admin> {
    const admin = await AdminModel.query().patchAndFetchById(id, payload);

    if (!admin) {
      throw new NotFoundException('Admin not found');
    }

    return admin;
  }

  async deleteById(id: number) {
    const rowsDeleted = await AdminModel.query().deleteById(id);

    if (!rowsDeleted) {
      throw new NotFoundException('Admin not found');
    }
  }
}
