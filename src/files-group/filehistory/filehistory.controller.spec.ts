import { Test, TestingModule } from '@nestjs/testing';
import { FilehistoryController } from './filehistory.controller';
import { FilehistoryService } from './filehistory.service';

describe('FilehistoryController', () => {
  let controller: FilehistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilehistoryController],
      providers: [FilehistoryService],
    }).compile();

    controller = module.get<FilehistoryController>(FilehistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
