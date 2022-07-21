import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GameConfiguration } from '../game-configuration-schema';
import { GetConfigurationRequest } from '../requests';

@QueryHandler(GetConfigurationRequest)
export class GetByCurrencyGroupHandler
  implements IQueryHandler<GetConfigurationRequest, GameConfiguration[]>
{
  async execute(): Promise<GameConfiguration[]> {
    return process.env.GAMES as unknown as GameConfiguration[];
  }
}
