import { Test, TestingModule } from '@nestjs/testing';
import { UnsafeFilesController } from './unsafe-files.controller';
import { UnsafeFilesService } from './unsafe-files.service';

describe('UnsafeFilesController', () => {
  let controller: UnsafeFilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UnsafeFilesController],
      providers: [UnsafeFilesService],
    }).compile();

    controller = module.get<UnsafeFilesController>(UnsafeFilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
