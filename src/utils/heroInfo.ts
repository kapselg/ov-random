import { Hero } from "./types";

export const heroes: {[key: string]: Hero} = {
  dva: {
    name: 'D.Va',
    image: '/assets/dva-avatar.png',
    background: '',
    role: 'tank',
  },
  doomfist: {
    name: 'Doomfist',
    image: '/assets/doomfist-avatar.png',
    background: '',
    role: 'tank',
  },
  queen: {
    name: 'Junker Queen',
    image: '/assets/queen-avatar.png',
    background: '',
    role: 'tank',
  },
  orisa: {
    name: 'Orisa',
    image: '/assets/orisa-avatar.png',
    background: '',
    role: 'tank',
  },
  reinhardt: {
    name: 'Reinhardt',
    image: '/assets/reinhardt-avatar.png',
    background: '',
    role: 'tank',
  },
  roadhog: {
    name: 'Roadhog',
    image: '/assets/roadhog-avatar.png',
    background: '',
    role: 'tank',
  },
  sigma: {
    name: 'Sigma',
    image: '/assets/sigma-avatar.png',
    background: '',
    role: 'tank',
  },
  winston: {
    name: 'Winston',
    image: '/assets/winston-avatar.png',
    background: '',
    role: 'tank',
  },
  ball: {
    name: 'Wrecking Ball',
    image: '/assets/ball-avatar.png',
    background: '',
    role: 'tank',
  },
  zarya: {
    name: 'Zarya',
    image: '/assets/zarya-avatar.png',
    background: '',
    role: 'tank',
  },
  ashe: {
    name: 'Ashe',
    image: '/assets/ashe-avatar.png',
    background: '',
    role: 'dps',
  },
  bastion: {
    name: 'Bastion',
    image: '/assets/bastion-avatar.png',
    background: '',
    role: 'dps',
  },
  cassidy: {
    name: 'Cassidy',
    image: '/assets/cassidy-avatar.png',
    background: '',
    role: 'dps',
  },
  echo: {
    name: 'Echo',
    image: '/assets/echo-avatar.png',
    background: '',
    role: 'dps',
  },
  genji: {
    name: 'Genji',
    image: '/assets/genji-avatar.png',
    background: '',
    role: 'dps',
  },
  hanzo: {
    name: 'Hanzo',
    image: '/assets/hanzo-avatar.png',
    background: '',
    role: 'dps',
  },
  junkrat: {
    name: 'Junkrat',
    image: '/assets/junkrat-avatar.png',
    background: '',
    role: 'dps',
  },
  mei: {
    name: 'Mei',
    image: '/assets/mei-avatar.png',
    background: '',
    role: 'dps',
  },
  pharah: {
    name: 'Pharah',
    image: '/assets/pharah-avatar.png',
    background: '',
    role: 'dps',
  },
  reaper: {
    name: 'Reaper',
    image: '/assets/reaper-avatar.png',
    background: '',
    role: 'dps',
  },
  soldier: {
    name: 'Soldier: 76',
    image: '/assets/soldier-avatar.png',
    background: '',
    role: 'dps',
  },
  sojourn: {
    name: 'Sojourn',
    image: '/assets/sojourn-avatar.png',
    background: '',
    role: 'dps',
  },
  sombra: {
    name: 'Sombra',
    image: '/assets/sombra-avatar.png',
    background: '',
    role: 'dps',
  },
  symmetra: {
    name: 'Symmetra',
    image: '/assets/symmetra-avatar.png',
    background: '',
    role: 'dps',
  },
  torbjorn: {
    name: 'Torbjörn',
    image: '/assets/torbjorn-avatar.png',
    background: '',
    role: 'dps',
  },
  tracer: {
    name: 'Tracer',
    image: '/assets/tracer-avatar.png',
    background: '',
    role: 'dps',
  },
  widowmaker: {
    name: 'Widowmaker',
    image: '/assets/widowmaker-avatar.png',
    background: '',
    role: 'dps',
  },
  ana: {
    name: 'Ana',
    image: '/assets/ana-avatar.png',
    background: '',
    role: 'support',
  },
  baptiste: {
    name: 'Baptiste',
    image: '/assets/baptiste-avatar.png',
    background: '',
    role: 'support',
  },
  brigitte: {
    name: 'Brigitte',
    image: '/assets/brigitte-avatar.png',
    background: '',
    role: 'support',
  },
  kiriko: {
    name: 'Kiriko',
    image: '/assets/kiriko-avatar.png',
    background: '',
    role: 'support',
  },
  lucio: {
    name: 'Lúcio',
    image: '/assets/lucio-avatar.png',
    background: '',
    role: 'support',
  },
  mercy: {
    name: 'Mercy',
    image: '/assets/mercy-avatar.png',
    background: '',
    role: 'support',
  },
  moira: {
    name: 'Moira',
    image: '/assets/moira-avatar.png',
    background: '',
    role: 'support',
  },
  zenyatta: {
    name: 'Zenyatta',
    image: '/assets/zenyatta-avatar.png',
    background: '',
    role: 'support',
  },
};

export const roles: {support: Hero[], dps: Hero[], tank: Hero[]} = {
  support: [
    {
      name: 'Ana',
      image: '/assets/ana-avatar.png',
      background: '',
      role: 'support'
    },
    {
      name: 'Baptiste',
      image: '/assets/baptiste-avatar.png',
      background: '',
      role: 'support'
    },
    {
      name: 'Brigitte',
      image: '/assets/brigitte-avatar.png',
      background: '',
      role: 'support'
    },
    {
      name: 'Kiriko',
      image: '/assets/kiriko-avatar.png',
      background: '',
      role: 'support'
    },
    {
      name: 'Lúcio',
      image: '/assets/lucio-avatar.png',
      background: '',
      role: 'support'
    },
    {
      name: 'Mercy',
      image: '/assets/mercy-avatar.png',
      background: '',
      role: 'support'
    },
    {
      name: 'Moira',
      image: '/assets/moira-avatar.png',
      background: '',
      role: 'support'
    },
    {
      name: 'Zenyatta',
      image: '/assets/zenyatta-avatar.png',
      background: '',
      role: 'support'
    }
  ],
  dps: [
    {
      name: 'Ashe',
      image: '/assets/ashe-avatar.png',
      background: '',
      role: 'dps'
    },
    {
      name: 'Bastion',
      image: '/assets/bastion-avatar.png',
      background: '',
      role: 'dps'
    },
    {
      name: 'Cassidy',
      image: '/assets/cassidy-avatar.png',
      background: '',
      role: 'dps'
    },
    {
      name: 'Echo',
      image: '/assets/echo-avatar.png',
      background: '',
      role: 'dps'
    },
    {
      name: 'Genji',
      image: '/assets/genji-avatar.png',
      background: '',
      role: 'dps'
    },
    {
      name: 'Hanzo',
      image: '/assets/hanzo-avatar.png',
      background: '',
      role: 'dps'
    },
    {
      name: 'Junkrat',
      image: '/assets/junkrat-avatar.png',
      background: '',
      role: 'dps'
    },
    {
      name: 'Mei',
      image: '/assets/mei-avatar.png',
      background: '',
      role: 'dps'
    },
    {
      name: 'Pharah',
      image: '/assets/pharah-avatar.png',
      background: '',
      role: 'dps'
    },
    {
      name: 'Reaper',
      image: '/assets/reaper-avatar.png',
      background: '',
      role: 'dps'
    },
    {
      name: 'Soldier: 76',
      image: '/assets/soldier-avatar.png',
      background: '',
      role: 'dps'
    },
    {
      name: 'Sojourn',
      image: '/assets/sojourn-avatar.png',
      background: '',
      role: 'dps'
    },
    {
      name: 'Sombra',
      image: '/assets/sombra-avatar.png',
      background: '',
      role: 'dps'
    },
    {
      name: 'Symmetra',
      image: '/assets/symmetra-avatar.png',
      background: '',
      role: 'dps'
    },
    {
      name: 'Torbjörn',
      image: '/assets/torbjorn-avatar.png',
      background: '',
      role: 'dps'
    },
    {
      name: 'Tracer',
      image: '/assets/tracer-avatar.png',
      background: '',
      role: 'dps'
    },
    {
      name: 'Widowmaker',
      image: '/assets/widowmaker-avatar.png',
      background: '',
      role: 'dps'
    }
  ],
  tank: [
    {
      name: 'D.Va',
      image: '/assets/dva-avatar.png',
      background: '',
      role: 'tank'
    },
    {
      name: 'Doomfist',
      image: '/assets/doomfist-avatar.png',
      background: '',
      role: 'tank'
    },
    {
      name: 'Junker Queen',
      image: '/assets/queen-avatar.png',
      background: '',
      role: 'tank'
    },
    {
      name: 'Orisa',
      image: '/assets/orisa-avatar.png',
      background: '',
      role: 'tank'
    },
    {
      name: 'Reinhardt',
      image: '/assets/reinhardt-avatar.png',
      background: '',
      role: 'tank'
    },
    {
      name: 'Roadhog',
      image: '/assets/roadhog-avatar.png',
      background: '',
      role: 'tank'
    },
    {
      name: 'Sigma',
      image: '/assets/sigma-avatar.png',
      background: '',
      role: 'tank'
    },
    {
      name: 'Winston',
      image: '/assets/winston-avatar.png',
      background: '',
      role: 'tank'
    },
    {
      name: 'Wrecking Ball',
      image: '/assets/ball-avatar.png',
      background: '',
      role: 'tank'
    },
    {
      name: 'Zarya',
      image: '/assets/zarya-avatar.png',
      background: '',
      role: 'tank'
    }
  ]
}