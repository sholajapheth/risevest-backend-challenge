import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UnsafeFilesService } from './unsafe-files.service';
import { CreateUnsafeFileDto } from './dto/create-unsafe-file.dto';
import { UpdateUnsafeFileDto } from './dto/update-unsafe-file.dto';

@Controller('unsafe-files')
export class UnsafeFilesController {
  constructor(private readonly unsafeFilesService: UnsafeFilesService) {}

  @Post()
  create(@Body() createUnsafeFileDto: CreateUnsafeFileDto) {
    return this.unsafeFilesService.create(createUnsafeFileDto);
  }

  @Get()
  findAll() {
    return this.unsafeFilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.unsafeFilesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUnsafeFileDto: UpdateUnsafeFileDto) {
    return this.unsafeFilesService.update(+id, updateUnsafeFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.unsafeFilesService.remove(+id);
  }
}
