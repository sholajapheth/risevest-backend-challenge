import { Injectable } from '@nestjs/common';
import { CreateUnsafeFileDto } from './dto/create-unsafe-file.dto';
import { UpdateUnsafeFileDto } from './dto/update-unsafe-file.dto';

@Injectable()
export class UnsafeFilesService {
  create(createUnsafeFileDto: CreateUnsafeFileDto) {
    return 'This action adds a new unsafeFile';
  }

  findAll() {
    return `This action returns all unsafeFiles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} unsafeFile`;
  }

  update(id: number, updateUnsafeFileDto: UpdateUnsafeFileDto) {
    return `This action updates a #${id} unsafeFile`;
  }

  remove(id: number) {
    return `This action removes a #${id} unsafeFile`;
  }
}
