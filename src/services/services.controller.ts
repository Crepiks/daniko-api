import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import {
  ApiBody,
  ApiConsumes,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { ImageUploadDto } from './dto/image-upload.dto';

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

  @ApiCreatedResponse({ description: 'Image has been uploaded.' })
  @ApiNotFoundResponse({ description: 'Service not found.' })
  @ApiParam({ name: 'id', description: 'Service identifier', type: Number })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Image of the service',
    type: ImageUploadDto,
  })
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const fileName = uuidv4();
          const extenstion = path.parse(file.originalname).ext;

          cb(null, `${fileName}${extenstion}`);
        },
      }),
    }),
  )
  @Post(':id/images')
  async uploadImage(
    @Param('id') id: string,
    @UploadedFile() image: Express.Multer.File,
  ) {
    return {
      image: await this.servicesService.uploadImage(+id, image.filename),
    };
  }

  @ApiOkResponse({ description: 'Image has been deleted.' })
  @ApiNotFoundResponse({ description: 'Service or service not found.' })
  @ApiParam({ name: 'id', description: 'Service identifier', type: Number })
  @ApiParam({ name: 'imageId', description: 'Image identifier', type: Number })
  @Delete(':id/images/:imageId')
  deleteImage(
    @Param('id') serviceId: string,
    @Param('imageId') imageId: string,
  ) {
    return this.servicesService.deleteImage(+serviceId, +imageId);
  }
}
