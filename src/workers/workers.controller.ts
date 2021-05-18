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
import { WorkersService } from './workers.service';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { ImageUploadDto } from './dto/image-upload.dto';

@ApiTags('workers')
@Controller('workers')
export class WorkersController {
  constructor(private readonly workersService: WorkersService) {}

  @ApiOkResponse({ description: 'Workers has been retrieved.' })
  @Get()
  async findAll() {
    return {
      workers: await this.workersService.findAll(),
    };
  }

  @ApiCreatedResponse({ description: 'Worker has been created.' })
  @Post()
  async create(@Body() createWorkerDto: CreateWorkerDto) {
    return {
      worker: await this.workersService.create(createWorkerDto),
    };
  }

  @ApiOkResponse({ description: 'Worker has been retrieved.' })
  @ApiNotFoundResponse({ description: 'Worker not found.' })
  @ApiParam({
    name: 'workerId',
    description: 'Worker identifier',
    type: Number,
  })
  @Get(':workerId')
  async findOne(@Param('workerId') workerId: string) {
    return {
      worker: await this.workersService.findOne(+workerId),
    };
  }

  @ApiOkResponse({ description: 'Worker has been updated.' })
  @ApiNotFoundResponse({ description: 'Worker not found.' })
  @ApiParam({
    name: 'workerId',
    description: 'Worker identifier',
    type: Number,
  })
  @Patch(':workerId')
  async update(
    @Param('workerId') workerId: string,
    @Body() updateWorkerDto: UpdateWorkerDto,
  ) {
    return {
      worker: await this.workersService.update(+workerId, updateWorkerDto),
    };
  }

  @ApiOkResponse({ description: 'Worker has been deleted.' })
  @ApiNotFoundResponse({ description: 'Worker not found.' })
  @ApiParam({
    name: 'workerId',
    description: 'Worker identifier',
    type: Number,
  })
  @Delete(':workerId')
  remove(@Param('workerId') workerId: string) {
    return this.workersService.remove(+workerId);
  }

  @ApiCreatedResponse({ description: 'Image has been uploaded' })
  @ApiNotFoundResponse({ description: 'Worker not found' })
  @ApiConsumes('multipart/form-data')
  @ApiParam({
    name: 'workerId',
    description: 'Worker identifier',
    type: Number,
  })
  @ApiBody({ description: 'Image of the worker', type: ImageUploadDto })
  @Post(':workerId/image')
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
  async uploadImage(
    @Param('workerId') workerId: string,
    @UploadedFile() image: Express.Multer.File,
  ) {
    return {
      worker: await this.workersService.setImage(+workerId, image.filename),
    };
  }
}
