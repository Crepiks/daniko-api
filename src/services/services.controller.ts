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
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('services')
@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @ApiOkResponse({ description: 'Services has been retrieved.' })
  @Get()
  async findAll() {
    return {
      services: await this.servicesService.findAll(),
    };
  }

  @ApiCreatedResponse({ description: 'Service has been created.' })
  @Post()
  async create(@Body() createServiceDto: CreateServiceDto) {
    return {
      service: await this.servicesService.create(createServiceDto),
    };
  }

  @ApiOkResponse({ description: 'Service has been retrieved.' })
  @ApiNotFoundResponse({ description: 'Service not found.' })
  @ApiParam({ name: 'id', description: 'Service identifier', type: Number })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return {
      service: await this.servicesService.findOne(+id),
    };
  }

  @ApiOkResponse({ description: 'Service has been updated.' })
  @ApiNotFoundResponse({ description: 'Service not found.' })
  @ApiParam({ name: 'id', description: 'Service identifier', type: Number })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateServiceDto: UpdateServiceDto,
  ) {
    return {
      service: await this.servicesService.update(+id, updateServiceDto),
    };
  }

  @ApiOkResponse({ description: 'Service has been deleted.' })
  @ApiNotFoundResponse({ description: 'Service not found.' })
  @ApiParam({ name: 'id', description: 'Service identifier', type: Number })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servicesService.remove(+id);
  }
}
