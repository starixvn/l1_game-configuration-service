import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { loadYAMLFile } from '../../common';
import { GameConfiguration } from '../game-configuration-schema';
import { GetConfigurationRequest } from '../requests';

@QueryHandler(GetConfigurationRequest)
export class GetByCurrencyGroupHandler
  implements IQueryHandler<GetConfigurationRequest, GameConfiguration[]>
{
  constructor() {
    const gameBySystem = `src/configs/games.${process.env.SYSTEM}.yml`;

    loadYAMLFile('src/configs/games.yml', gameBySystem);
  }

  async execute(): Promise<GameConfiguration[]> {
    return process.env.GAMES as unknown as GameConfiguration[];
  }
}
