import { Test, TestingModule } from '@nestjs/testing';
import { ReatTimeService } from './reat-time.service';

describe('ReatTimeService', () => {
  let service: ReatTimeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReatTimeService],
    }).compile();

    service = module.get<ReatTimeService>(ReatTimeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
