import { Test, TestingModule } from '@nestjs/testing';
import { SlackController } from './slack.controller';
import { SlackService } from './slack.service';

describe('SlackController', () => {
  let controller: SlackController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SlackController],
      providers: [
        {
          provide: SlackService,
          useValue: {
            // 必要なモックメソッドをここに追加
          },
        },
      ],
    }).compile();

    controller = module.get<SlackController>(SlackController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
