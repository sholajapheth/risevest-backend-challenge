import { Module } from '@nestjs/common';
import { UnsafeFilesService } from './unsafe-files.service';
import { UnsafeFilesController } from './unsafe-files.controller';

@Module({
  controllers: [UnsafeFilesController],
  providers: [UnsafeFilesService],
})
export class UnsafeFilesModule {}
