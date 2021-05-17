import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AdminsRepository } from 'src/data/repositories/admins.repository';
import { Admin } from 'src/entities/admin.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly adminsRepository: AdminsRepository,
    private readonly jwtService: JwtService,
  ) {}

  async validateAdmin(email: string, password: string): Promise<any> {
    const admin = await this.adminsRepository.findByEmail(email);
    if (admin && admin.password === password) {
      return admin;
    }

    return null;
  }

  generateToken(admin: Admin): string {
    const payload = { id: admin.id, email: admin.email };
    return this.jwtService.sign(payload);
  }
}
