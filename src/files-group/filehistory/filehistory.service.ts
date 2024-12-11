import { Injectable } from '@nestjs/common';
import { CreateFilehistoryDto } from './dto/create-filehistory.dto';
import { UpdateFilehistoryDto } from './dto/update-filehistory.dto';

@Injectable()
export class FilehistoryService {
  create(createFilehistoryDto: CreateFilehistoryDto) {
    return 'This action adds a new filehistory';
  }

  findAll() {
    return `This action returns all filehistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} filehistory`;
  }

  update(id: number, updateFilehistoryDto: UpdateFilehistoryDto) {
    return `This action updates a #${id} filehistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} filehistory`;
  }
}
