import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WorkersService } from './workers.service';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';

@Controller('workers')
export class WorkersController {
  constructor(private readonly workersService: WorkersService) {}

  @Get()
  async findAll() {
    return {
      workers: await this.workersService.findAll(),
    };
  }

  @Post()
  async create(@Body() createWorkerDto: CreateWorkerDto) {
    return {
      worker: await this.workersService.create(createWorkerDto),
    };
  }

  @Get(':id')
  async indOne(@Param('id') id: string) {
    return {
      worker: await this.workersService.findOne(+id),
    };
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateWorkerDto: UpdateWorkerDto,
  ) {
    return {
      worker: await this.workersService.update(+id, updateWorkerDto),
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workersService.remove(+id);
  }
}
