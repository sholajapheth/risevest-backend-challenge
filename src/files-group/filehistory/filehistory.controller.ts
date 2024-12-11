import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FilehistoryService } from './filehistory.service';
import { CreateFilehistoryDto } from './dto/create-filehistory.dto';
import { UpdateFilehistoryDto } from './dto/update-filehistory.dto';

@Controller('filehistory')
export class FilehistoryController {
  constructor(private readonly filehistoryService: FilehistoryService) {}

  @Post()
  create(@Body() createFilehistoryDto: CreateFilehistoryDto) {
    return this.filehistoryService.create(createFilehistoryDto);
  }

  @Get()
  findAll() {
    return this.filehistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filehistoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFilehistoryDto: UpdateFilehistoryDto) {
    return this.filehistoryService.update(+id, updateFilehistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filehistoryService.remove(+id);
  }
}
