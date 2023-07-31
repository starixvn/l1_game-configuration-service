import { Controller, Get, Param } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import {
  GetConfigurationRequest,
  GetConfigurationByIdRequest,
} from './requests';

@Controller('configurations')
export class GameConfigurationController {
  constructor(private readonly query: QueryBus) {}

  @Get()
  getConfigurations() {
    return this.query.execute(new GetConfigurationRequest());
  }

  @Get(':gameId')
  getConfigurationById(@Param('gameId') gameId: string) {
    return this.query.execute(new GetConfigurationByIdRequest(+gameId));
  }
}
