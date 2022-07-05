import { Controller, Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetConfigurationRequest } from './requests';

@Controller('game/configurations')
export class GameConfigurationController {
  constructor(private readonly query: QueryBus) {}

  @Get()
  getConfigurations() {
    return this.query.execute(new GetConfigurationRequest());
  }
}
