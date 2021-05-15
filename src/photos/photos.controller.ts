import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { v4 as uuidv4 } from 'uuid';
import { diskStorage } from 'multer';
import path from 'path';
import { PhotosService } from './photos.service';

@ApiTags('photos')
@Controller('photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) {}

  @ApiOkResponse({ description: 'Photos has been retrieved.' })
  @Get()
  async findAll() {
    return {
      photos: await this.photosService.findAll(),
    };
  }

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
  @Post()
  async create(@UploadedFile() image: Express.Multer.File) {
    return {
      photo: await this.photosService.create(image.filename),
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.photosService.remove(+id);
  }
}
