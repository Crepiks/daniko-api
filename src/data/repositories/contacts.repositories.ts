import { Injectable } from '@nestjs/common';
import { Contacts } from 'src/entities/contacts.entity';
import ContactModel from '../models/contact.model';

const CONTACT_ID = 1;

@Injectable()
export class ContactsRepositories {
  findAll(): Promise<Contacts> {
    return ContactModel.query().findById(CONTACT_ID);
  }
}
