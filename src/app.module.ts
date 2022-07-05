import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configurations from './common/configurations';
import { GameConfigurationModule } from './game-configurations';
import { HealthModule } from './health';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configurations] }),
    HealthModule,
    GameConfigurationModule,
  ],
})
export class AppModule {}
