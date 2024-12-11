import { Test, TestingModule } from '@nestjs/testing';
import { UnsafeFilesService } from './unsafe-files.service';

describe('UnsafeFilesService', () => {
  let service: UnsafeFilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnsafeFilesService],
    }).compile();

    service = module.get<UnsafeFilesService>(UnsafeFilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
