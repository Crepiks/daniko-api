import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AdminsService } from './admins.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { LoginAdminDto } from './dto/login-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@ApiTags('admins')
@Controller('admins')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @ApiOkResponse({ description: 'Authentication token has been generated.' })
  @ApiUnauthorizedResponse({ description: 'Creadentials are invalid.' })
  @Post('login')
  login(@Body() loginAdminDto: LoginAdminDto) {
    return this.adminsService.login(loginAdminDto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ description: 'List of admins has been retrieved.' })
  @Get()
  async findAll() {
    return {
      admins: await this.adminsService.findAll(),
    };
  }

  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse({ description: 'Admin has been created.' })
  @Post()
  async create(@Body() payload: CreateAdminDto) {
    return {
      admin: await this.adminsService.create(payload),
    };
  }

  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ description: 'Admin has been retrieved.' })
  @ApiNotFoundResponse({ description: 'Admin not found.' })
  @ApiParam({ name: 'adminId', description: 'Admin identifier', type: Number })
  @Get(':adminId')
  async findOne(@Param('adminId') adminId: string) {
    return {
      admin: await this.adminsService.findOne(+adminId),
    };
  }

  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ description: 'Admin has been updated.' })
  @ApiNotFoundResponse({ description: 'Admin not found.' })
  @ApiParam({ name: 'adminId', description: 'Admin identifier', type: Number })
  @Patch(':adminId')
  async update(
    @Param('adminId') adminId: string,
    @Body() updateAdminDto: UpdateAdminDto,
  ) {
    return {
      admin: await this.adminsService.update(+adminId, updateAdminDto),
    };
  }

  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ description: 'Admin has been deleted.' })
  @ApiNotFoundResponse({ description: 'Admin not found.' })
  @ApiParam({ name: 'adminId', description: 'Admin identifier', type: Number })
  @Delete(':adminId')
  async remove(@Param('adminId') adminId: string) {
    await this.adminsService.remove(+adminId);
  }
}
