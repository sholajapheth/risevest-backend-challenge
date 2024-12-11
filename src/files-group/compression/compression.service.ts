import { Injectable } from '@nestjs/common';
import { CreateCompressionDto } from './dto/create-compression.dto';
import { UpdateCompressionDto } from './dto/update-compression.dto';

@Injectable()
export class CompressionService {
  create(createCompressionDto: CreateCompressionDto) {
    return 'This action adds a new compression';
  }

  findAll() {
    return `This action returns all compression`;
  }

  findOne(id: number) {
    return `This action returns a #${id} compression`;
  }

  update(id: number, updateCompressionDto: UpdateCompressionDto) {
    return `This action updates a #${id} compression`;
  }

  remove(id: number) {
    return `This action removes a #${id} compression`;
  }
}
