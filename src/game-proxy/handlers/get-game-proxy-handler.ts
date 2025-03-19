import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetGameProxyRequest } from '../requests';
import { GameProxy } from '../models/game-proxy';

@QueryHandler(GetGameProxyRequest)
export class GetGameProxyHandler
  implements IQueryHandler<GetGameProxyRequest, GameProxy>
{

  async execute(): Promise<GameProxy> {
    return process.env.GAME_PROXY as unknown as GameProxy;
  }
}
