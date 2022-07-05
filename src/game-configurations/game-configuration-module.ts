import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { GameConfigurationController } from './game-configuration-controller';
import * as Handlers from './handlers';

@Module({
  imports: [CqrsModule],
  controllers: [GameConfigurationController],
  providers: Object.values(Handlers),
})
export class GameConfigurationModule {}
