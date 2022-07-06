import { HealthController } from '../../src/health';

describe('HealthController', () => {
  describe('check', () => {
    it('should return result of terminus service', () => {
      // Arrange
      const controller = new HealthController({
        check: jest.fn(() => 'ok'),
      } as any);

      // Act
      const result = controller.check();

      // Assert
      expect(result).toBe('ok');
    });
  });
});
