import { Controller, Get, Body, Patch } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { ContactsService } from './contacts.service';
import { UpdateContactDto } from './dto/update-contact.dto';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @ApiOkResponse({ description: 'Contacts has been retrieved.' })
  @Get()
  async findAll() {
    return {
      contacts: await this.contactsService.findAll(),
    };
  }

  @ApiOkResponse({ description: 'Contacts has been updated.' })
  @Patch()
  async update(@Body() updateContactDto: UpdateContactDto) {
    return {
      contacts: await this.contactsService.update(updateContactDto),
    };
  }
}
