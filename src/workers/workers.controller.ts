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
  @ApiParam({ name: 'id', description: 'Worker identifier', type: Number })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return {
      worker: await this.workersService.findOne(+id),
    };
  }

  @ApiOkResponse({ description: 'Worker has been updated.' })
  @ApiNotFoundResponse({ description: 'Worker not found.' })
  @ApiParam({ name: 'id', description: 'Worker identifier', type: Number })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateWorkerDto: UpdateWorkerDto,
  ) {
    return {
      worker: await this.workersService.update(+id, updateWorkerDto),
    };
  }

  @ApiOkResponse({ description: 'Worker has been deleted.' })
  @ApiNotFoundResponse({ description: 'Worker not found.' })
  @ApiParam({ name: 'id', description: 'Worker identifier', type: Number })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workersService.remove(+id);
  }

  @Post(':id/image')
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
    @Param('id') id: string,
    @UploadedFile() image: Express.Multer.File,
  ) {
    return {
      worker: await this.workersService.setImage(+id, image.filename),
    };
  }
}
