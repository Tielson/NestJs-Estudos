import { Test, TestingModule } from '@nestjs/testing';
import { describe } from 'node:test';
import { AppController } from './app.controller';

describe('AppController', () => {
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [],
    }).compile();
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect('Hello World!');
    });
  });
});
