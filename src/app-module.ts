import { Module } from '@nestjs/common';
import { GameConfigurationModule } from './game-configurations';
import { GameProxyModule } from './game-proxy';
import { HealthModule } from './health';

@Module({
  imports: [HealthModule, GameConfigurationModule, GameProxyModule],
})
export class AppModule {}
