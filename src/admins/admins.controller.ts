import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AdminsService } from './admins.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@ApiTags('admins')
@Controller('admins')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @Get()
  async findAll() {
    return {
      admins: this.adminsService.findAll(),
    };
  }

  @Post()
  async create(@Body() payload: CreateAdminDto) {
    return {
      admin: await this.adminsService.create(payload),
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return {
      admin: await this.adminsService.findOne(+id),
    };
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAdminDto: UpdateAdminDto,
  ) {
    return {
      admin: await this.adminsService.update(+id, updateAdminDto),
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.adminsService.remove(+id);
  }
}
