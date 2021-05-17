import { Injectable } from '@nestjs/common';
import { AdminsRepository } from 'src/data/repositories/admins.repository';

@Injectable()
export class AuthService {
  constructor(private readonly adminsRepository: AdminsRepository) {}

  async validateAdmin(email: string, password: string): Promise<any> {
    const admin = await this.adminsRepository.findByEmail(email);
    if (admin && admin.password === password) {
      return admin;
    }

    return null;
  }
}
