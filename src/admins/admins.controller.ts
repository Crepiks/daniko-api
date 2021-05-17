import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { AdminsService } from './admins.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@ApiTags('admins')
@Controller('admins')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Request() req) {
    return req.user;
  }

  @ApiOkResponse({ description: 'List of admins has been retrieved.' })
  @Get()
  async findAll() {
    return {
      admins: this.adminsService.findAll(),
    };
  }

  @ApiCreatedResponse({ description: 'Admin has been created.' })
  @Post()
  async create(@Body() payload: CreateAdminDto) {
    return {
      admin: await this.adminsService.create(payload),
    };
  }

  @ApiOkResponse({ description: 'Admin has been retrieved.' })
  @ApiNotFoundResponse({ description: 'Admin not found.' })
  @ApiParam({ name: 'id', description: 'Admin identifier', type: Number })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return {
      admin: await this.adminsService.findOne(+id),
    };
  }

  @ApiOkResponse({ description: 'Admin has been updated.' })
  @ApiNotFoundResponse({ description: 'Admin not found.' })
  @ApiParam({ name: 'id', description: 'Admin identifier', type: Number })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAdminDto: UpdateAdminDto,
  ) {
    return {
      admin: await this.adminsService.update(+id, updateAdminDto),
    };
  }

  @ApiOkResponse({ description: 'Admin has been deleted.' })
  @ApiNotFoundResponse({ description: 'Admin not found.' })
  @ApiParam({ name: 'id', description: 'Admin identifier', type: Number })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.adminsService.remove(+id);
  }
}
