import { Test, TestingModule } from '@nestjs/testing';
import { FilehistoryService } from './filehistory.service';

describe('FilehistoryService', () => {
  let service: FilehistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilehistoryService],
    }).compile();

    service = module.get<FilehistoryService>(FilehistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
