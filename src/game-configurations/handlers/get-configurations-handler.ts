import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GameConfiguration } from '../game-configuration-schema';
import { GetConfigurationRequest } from '../requests';

const configurations: GameConfiguration[] = [
  {
    id: -1,
    name: 'LuckyWheel',
    key: 'LuckyWheel',
  },
  {
    id: 0,
    name: 'Lobby',
    key: 'main',
    mini: {
      miniPanel: true,
    },
  },
  {
    id: 1,
    name: 'BigSmall',
    key: 'BigSmall',
    mini: {
      miniPanel: true,
    },
    order: 700,
  },
  {
    id: 2,
    name: 'SeDie',
    key: 'SeDie',
    order: 300,
    banner: {
      displayTime: 10,
      order: 1,
    },
  },
  {
    id: 3,
    name: 'FishPrawnCrab',
    key: 'FishPrawnCrab',
    order: 1800,
    mini: {
      miniPanel: true,
    },
  },
  {
    id: 4,
    name: 'TurboBigSmall',
    key: 'TXTurbo',
    order: 800,
    mini: {
      miniPanel: true,
    },
    route: 'turbobigsmall',
  },
  {
    id: 6,
    name: 'TurboOddEven',
    key: 'OETurbo',
    order: 900,
    mini: {
      miniPanel: true,
    },
    route: 'turbooddeven',
  },
  {
    id: 7,
    name: 'DragonTiger',
    key: 'DragonTiger',
    order: 1900,
    mini: {
      miniPanel: true,
    },
  },
  {
    id: 8,
    name: 'KenoProMax',
    key: 'KenoProMax',
    order: 1300,
  },
  {
    id: 9,
    name: 'MiniSedie',
    key: 'MiniSeDie',
    order: 500,
    mini: {
      miniPanel: true,
    },
  },
  {
    id: 10,
    name: 'Baccarat',
    key: 'Baccarat',
    order: 1600,
  },
  {
    id: 11,
    name: 'KenoProViet',
    key: 'KenoMax',
    order: 1400,
    mini: {
      miniPanel: false,
    },
    route: 'minikeno',
  },
  {
    id: 12,
    name: 'KenoMax',
    key: 'KenoMax',
    mini: {
      miniPanel: false,
    },
    route: 'minikeno',
  },
  {
    id: 13,
    name: 'KenoMax2',
    key: 'KenoMax2',
    mini: {
      miniPanel: false,
    },
    route: 'minikeno',
  },
  {
    id: 14,
    name: 'KenoMini',
    key: 'KenoMini',
    mini: {
      miniPanel: false,
    },
    route: 'minikeno',
  },
  {
    id: 15,
    name: 'KenoMini2',
    key: 'KenoMini2',
    mini: {
      miniPanel: false,
    },
    route: 'minikeno',
  },
  {
    id: 16,
    name: 'KenoEast',
    key: 'KenoEast',
    mini: {
      miniPanel: false,
    },
    route: 'minikeno',
  },
  {
    id: 17,
    name: 'KenoWest',
    key: 'KenoWest',
    mini: {
      miniPanel: false,
    },
    route: 'minikeno',
  },
  {
    id: 18,
    name: 'KenoSouth',
    key: 'KenoSouth',
    mini: {
      miniPanel: false,
    },
    route: 'minikeno',
  },
  {
    id: 19,
    name: 'KenoNorth',
    key: 'KenoNorth',
    mini: {
      miniPanel: false,
    },
    route: 'minikeno',
  },
  {
    id: 21,
    name: 'Roulette',
    key: 'Roulette',
    order: 2200,
  },
  {
    id: 22,
    name: 'VipSedie',
    key: 'VipSeDie',
    order: 200,
    route: 'vsedie',
  },
  {
    id: 23,
    name: 'BlackJack',
    key: 'BlackJack',
    order: 2100,
  },
  {
    id: 24,
    name: 'SpecialSeDie',
    key: 'SpecialSeDie',
    order: 2000,
    mini: {
      miniPanel: false,
    },
  },
  {
    id: 25,
    name: 'SicBo',
    key: 'SicBo',
    order: 600,
  },
  {
    id: 26,
    name: 'VipFishPrawnCrab',
    key: 'VipFishPrawnCrab',
    order: 1700,
  },
  {
    id: 27,
    name: 'VipBaccarat',
    key: 'VipBaccarat',
    order: 1500,
  },
  {
    id: 28,
    name: 'VipSedieWar',
    key: 'VipSedieWar',
    order: 400,
  },
  {
    id: 29,
    name: 'FourGuardians',
    key: 'FourGuardians',
    order: 1000,
    bigSize: true,
  },
  {
    id: 31,
    name: 'Lottery',
    key: 'Lottery',
    order: 2300,
  },
  {
    id: 35,
    name: 'ThreeCards',
    key: 'ThreeCards',
    order: 2400,
  },
  {
    id: 38,
    name: 'HeroesSlot',
    key: 'HeroesSlot',
    order: 1100,
    bigSize: true,
  },
  {
    id: 39,
    name: 'CasinoHoldemPoker',
    key: 'CasinoHoldemPoker',
    order: 2600,
  },
  {
    id: 42,
    name: 'TexasHoldemPoker',
    key: 'TexasHoldemPoker',
    order: 2800,
    banner: {
      displayTime: 5,
      order: 100,
    },
  },
  {
    id: 43,
    name: 'BitcoinMaster',
    key: 'BitcoinMaster',
    order: 2500,
  },
  {
    id: 45,
    name: 'HiLo',
    key: 'Hilo',
    order: 2700,
    mini: {
      miniPanel: true,
    },
    banner: {
      displayTime: 5,
      order: 200,
    },
  },
  {
    id: 46,
    name: 'NightClub',
    key: 'NightClub',
    order: 1200,
    bigSize: true,
  },
  {
    id: 47,
    name: 'TreasureIsland',
    key: 'TreasureIsland',
    order: 1,
    remoteBundle: {
      dependsOn: [],
    },
    bigSize: true,
    tag: 'new',
  },
];

@QueryHandler(GetConfigurationRequest)
export class GetByCurrencyGroupHandler
  implements IQueryHandler<GetConfigurationRequest, GameConfiguration[]>
{
  async execute(): Promise<GameConfiguration[]> {
    return configurations;
  }
}
