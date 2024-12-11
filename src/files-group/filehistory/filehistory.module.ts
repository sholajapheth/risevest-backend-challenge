import { Module } from '@nestjs/common';
import { FilehistoryService } from './filehistory.service';
import { FilehistoryController } from './filehistory.controller';

@Module({
  controllers: [FilehistoryController],
  providers: [FilehistoryService],
})
export class FilehistoryModule {}
