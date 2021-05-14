import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('services')
@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Get()
  async findAll() {
    return {
      services: await this.servicesService.findAll(),
    };
  }

  @Post()
  async create(@Body() createServiceDto: CreateServiceDto) {
    return {
      service: await this.servicesService.create(createServiceDto),
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return {
      service: await this.servicesService.findOne(+id),
    };
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateServiceDto: UpdateServiceDto,
  ) {
    return {
      service: await this.servicesService.update(+id, updateServiceDto),
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servicesService.remove(+id);
  }
}
