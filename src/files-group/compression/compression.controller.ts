import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompressionService } from './compression.service';
import { CreateCompressionDto } from './dto/create-compression.dto';
import { UpdateCompressionDto } from './dto/update-compression.dto';

@Controller('compression')
export class CompressionController {
  constructor(private readonly compressionService: CompressionService) {}

  @Post()
  create(@Body() createCompressionDto: CreateCompressionDto) {
    return this.compressionService.create(createCompressionDto);
  }

  @Get()
  findAll() {
    return this.compressionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.compressionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompressionDto: UpdateCompressionDto) {
    return this.compressionService.update(+id, updateCompressionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.compressionService.remove(+id);
  }
}
