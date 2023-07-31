export class GetConfigurationByIdRequest {
  readonly gameId: number;

  constructor(gameId = 0) {
    this.gameId = +gameId;
  }
}
