import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GameConfiguration } from '../game-configuration-schema';
import { GetConfigurationByIdRequest } from '../requests';

@QueryHandler(GetConfigurationByIdRequest)
export class GetConfigurationByIdHandler
  implements IQueryHandler<GetConfigurationByIdRequest, GameConfiguration>
{
  async execute(
    request: GetConfigurationByIdRequest,
  ): Promise<GameConfiguration> {
    const { gameId } = request;
    const gameConfigurations = process.env
      .GAMES as unknown as GameConfiguration[];
    return gameConfigurations.find((config) => config.id === gameId);
  }
}
