import {
  Controller,
  Get,
  Body,
  Patch,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { UpdateContactDto } from './dto/update-contact.dto';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Get()
  findAll() {
    return this.contactsService.findAll();
  }

  @Patch()
  update(@Body() updateContactDto: UpdateContactDto) {
    return this.contactsService.update(updateContactDto);
  }
}
