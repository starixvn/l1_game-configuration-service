import { Controller, Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import {
  GetGameProxyRequest,
} from './requests';

@Controller('proxy')
export class GameProxyController {
  constructor(private readonly query: QueryBus) {}

  @Get()
  getGameProxy() {
    return this.query.execute(new GetGameProxyRequest());
  }

}
