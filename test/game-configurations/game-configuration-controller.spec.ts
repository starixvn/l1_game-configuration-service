import { GameConfigurationController } from '../../src/game-configurations';

describe('GameConfigurationController', () => {
  describe('getConfigurations', () => {
    it('should execute query bus', () => {
      // Arrange
      const queryBus = {
        execute: jest.fn().mockReturnValue([1, 2, 3]),
      };
      const controller = new GameConfigurationController(queryBus as any);

      // Act
      const result = controller.getConfigurations();

      // Assert
      expect(result).toStrictEqual([1, 2, 3]);
    });
  });
});
