import { Injectable } from '@nestjs/common';
import { Admin } from 'src/admins/entities/admin.entity';
import { AdminModel } from '../models/admin.model';

@Injectable()
export class AdminsRepository {
  async findAll(): Promise<Admin[]> {
    const admins = await AdminModel.query();
    return admins;
  }
}
