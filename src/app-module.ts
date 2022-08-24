import { Module } from '@nestjs/common';
import { GameConfigurationModule } from './game-configurations';
import { HealthModule } from './health';

@Module({
  imports: [HealthModule, GameConfigurationModule],
})
export class AppModule {}
