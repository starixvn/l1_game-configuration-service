import { GetConfigurationByIdHandler } from '../../../src/game-configurations/handlers/get-configuration-by-id-handler';
import { GetConfigurationByIdRequest } from '../../../src/game-configurations/requests/get-configuration-by-id';

describe('GetMicrositeConfigurationHandler', () => {
  let handler: GetConfigurationByIdHandler;
  beforeEach(() => {
    handler = new GetConfigurationByIdHandler();
  });

  describe('excute', () => {
    const env = process.env;
    beforeEach(() => {
      delete process.env.GAMES;
      jest.resetModules();
      process.env = { ...env };
    });
    afterEach(() => {
      process.env = env;
    });
    it('should return configuration when existing configuration in env.GAMES', async () => {
      // arrange
      const request = new GetConfigurationByIdRequest(2);
      const config = { id: 2, isMicrosite: true };
      process.env.GAMES = [config] as any;

      // act
      const actual = await handler.execute(request);

      // assert
      expect(actual).toEqual(config);
    });

    it('should return undefined when not existing configuration in env.GAMES', async () => {
      // arrange
      const request = new GetConfigurationByIdRequest(100);
      process.env.GAMES = [] as any;

      // act
      const actual = await handler.execute(request);

      // assert
      expect(actual).toEqual(undefined);
    });
  });
});
