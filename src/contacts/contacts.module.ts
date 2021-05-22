import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { RepositoriesModule } from 'src/data/repositories/repositories.module';

@Module({
  imports: [RepositoriesModule],
  controllers: [ContactsController],
  providers: [ContactsService],
})
export class ContactsModule {}
