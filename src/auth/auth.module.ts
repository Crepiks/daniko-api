import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AdminsModule } from 'src/admins/admins.module';
import { RepositoriesModule } from 'src/data/repositories/repositories.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [RepositoriesModule, AdminsModule, PassportModule],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}
