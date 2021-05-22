import { Injectable } from '@nestjs/common';
import { ContactsRepository } from 'src/data/repositories/contacts.repository';
import { Contacts } from 'src/entities/contacts.entity';
import { UpdateContactDto } from './dto/update-contact.dto';

@Injectable()
export class ContactsService {
  constructor(private readonly contactsRepository: ContactsRepository) {}

  findAll(): Promise<Contacts> {
    return this.contactsRepository.findAll();
  }

  update(payload: UpdateContactDto): Promise<Contacts> {
    return this.contactsRepository.update(payload);
  }
}
