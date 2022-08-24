import { WinstonLogger } from 'nest-winston';
import { createLogger } from '../../src/common';

describe('createLogger', () => {
  describe('when called', () => {
    it('should create a winston instance', () => {
      // Act
      const logger = createLogger();

      // Assert
      expect(logger).toBeInstanceOf(WinstonLogger);
    });
  });
});
