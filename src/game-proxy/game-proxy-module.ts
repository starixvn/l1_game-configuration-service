import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { GameProxyController } from './game-proxy-controller';
import * as Handlers from './handlers';

@Module({
  imports: [CqrsModule],
  controllers: [GameProxyController],
  providers: Object.values(Handlers),
})
export class GameProxyModule {}
