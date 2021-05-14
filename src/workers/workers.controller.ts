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
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

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
}
