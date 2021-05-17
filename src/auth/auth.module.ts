import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AdminsModule } from 'src/admins/admins.module';
import { RepositoriesModule } from 'src/data/repositories/repositories.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import config from './config';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    RepositoriesModule,
    PassportModule,
    JwtModule.register({
      secret: config.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
