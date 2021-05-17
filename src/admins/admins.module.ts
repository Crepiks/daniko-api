import { Module } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { AdminsController } from './admins.controller';
import { RepositoriesModule } from 'src/data/repositories/repositories.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [RepositoriesModule, AuthModule],
  controllers: [AdminsController],
  providers: [AdminsService],
})
export class AdminsModule {}
