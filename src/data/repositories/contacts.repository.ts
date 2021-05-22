import { Injectable } from '@nestjs/common';
import { UpdateContactDto } from 'src/contacts/dto/update-contact.dto';
import { Contacts } from 'src/entities/contacts.entity';
import ContactModel from '../models/contact.model';

const CONTACT_ID = 1;

@Injectable()
export class ContactsRepository {
  findAll(): Promise<Contacts> {
    return ContactModel.query().findById(CONTACT_ID);
  }

  update(payload: UpdateContactDto): Promise<Contacts> {
    return ContactModel.query().patchAndFetchById(CONTACT_ID, payload);
  }
}
