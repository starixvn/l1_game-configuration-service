import { GetByCurrencyGroupHandler } from '../../../src/game-configurations/handlers';

describe('GetByCurrencyGroupHandler', () => {
  describe('execute', () => {
    it('should return all game configs', async () => {
      // Arrange
      const handler = new GetByCurrencyGroupHandler();

      // Act
      const result = await handler.execute();

      // Assert
      expect(result).toHaveLength(38);
    });
  });
});
