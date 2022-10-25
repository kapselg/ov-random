const http = require("https");
const fs = require("fs");

const heroes = {
  dva: {
    name: 'D.Va',
    image: '/assets/dva-avatar.png',
    background: '',
    role: 'tank'
  },
  doomfist: {
    name: 'Doomfist',
    image: '/assets/doomfist-avatar.png',
    background: '',
    role: 'tank'
  },
  queen: {
    name: 'Junker Queen',
    image: '/assets/queen-avatar.png',
    background: '',
    role: 'tank'
  },
  orisa: {
    name: 'Orisa',
    image: '/assets/orisa-avatar.png',
    background: '',
    role: 'tank'
  },
  reinhardt: {
    name: 'Reinhardt',
    image: '/assets/reinhardt-avatar.png',
    background: '',
    role: 'tank'
  },
  roadhog: {
    name: 'Roadhog',
    image: '/assets/roadhog-avatar.png',
    background: '',
    role: 'tank'
  },
  sigma: {
    name: 'Sigma',
    image: '/assets/sigma-avatar.png',
    background: '',
    role: 'tank'
  },
  winston: {
    name: 'Winston',
    image: '/assets/winston-avatar.png',
    background: '',
    role: 'tank'
  },
  ball: {
    name: 'Wrecking Ball',
    image: '/assets/ball-avatar.png',
    background: '',
    role: 'tank'
  },
  zarya: {
    name: 'Zarya',
    image: '/assets/zarya-avatar.png',
    background: '',
    role: 'tank'
  },
  ashe: {
    name: 'Ashe',
    image: '/assets/ashe-avatar.png',
    background: '',
    role: 'dps'
  },
  bastion: {
    name: 'Bastion',
    image: '/assets/bastion-avatar.png',
    background: '',
    role: 'dps'
  },
  cassidy: {
    name: 'Cassidy',
    image: '/assets/cassidy-avatar.png',
    background: '',
    role: 'dps'
  },
  echo: {
    name: 'Echo',
    image: '/assets/echo-avatar.png',
    background: '',
    role: 'dps'
  },
  genji: {
    name: 'Genji',
    image: '/assets/genji-avatar.png',
    background: '',
    role: 'dps'
  },
  hanzo: {
    name: 'Hanzo',
    image: '/assets/hanzo-avatar.png',
    background: '',
    role: 'dps'
  },
  junkrat: {
    name: 'Junkrat',
    image: '/assets/junkrat-avatar.png',
    background: '',
    role: 'dps'
  },
  mei: {
    name: 'Mei',
    image: '/assets/mei-avatar.png',
    background: '',
    role: 'dps'
  },
  pharah: {
    name: 'Pharah',
    image: '/assets/pharah-avatar.png',
    background: '',
    role: 'dps'
  },
  reaper: {
    name: 'Reaper',
    image: '/assets/reaper-avatar.png',
    background: '',
    role: 'dps'
  },
  soldier: {
    name: 'Soldier: 76',
    image: '/assets/soldier-avatar.png',
    background: '',
    role: 'dps'
  },
  sojourn: {
    name: 'Sojourn',
    image: '/assets/sojourn-avatar.png',
    background: '',
    role: 'dps'
  },
  sombra: {
    name: 'Sombra',
    image: '/assets/sombra-avatar.png',
    background: '',
    role: 'dps'
  },
  symmetra: {
    name: 'Symmetra',
    image: '/assets/symmetra-avatar.png',
    background: '',
    role: 'dps'
  },
  torbjorn: {
    name: 'Torbjörn',
    image: '/assets/torbjorn-avatar.png',
    background: '',
    role: 'dps'
  },
  tracer: {
    name: 'Tracer',
    image: '/assets/tracer-avatar.png',
    background: '',
    role: 'dps'
  },
  widowmaker: {
    name: 'Widowmaker',
    image: '/assets/widowmaker-avatar.png',
    background: '',
    role: 'dps'
  },
  ana: {
    name: 'Ana',
    image: '/assets/ana-avatar.png',
    background: '',
    role: 'support'
  },
  baptiste: {
    name: 'Baptiste',
    image: '/assets/baptiste-avatar.png',
    background: '',
    role: 'support'
  },
  brigitte: {
    name: 'Brigitte',
    image: '/assets/brigitte-avatar.png',
    background: '',
    role: 'support'
  },
  kiriko: {
    name: 'Kiriko',
    image: '/assets/kiriko-avatar.png',
    background: '',
    role: 'support'
  },
  lucio: {
    name: 'Lúcio',
    image: '/assets/lucio-avatar.png',
    background: '',
    role: 'support'
  },
  mercy: {
    name: 'Mercy',
    image: '/assets/mercy-avatar.png',
    background: '',
    role: 'support'
  },
  moira: {
    name: 'Moira',
    image: '/assets/moira-avatar.png',
    background: '',
    role: 'support'
  },
  zenyatta: {
    name: 'Zenyatta',
    image: '/assets/zenyatta-avatar.png',
    background: '',
    role: 'support'
  }
}
const roles = {
  support: [
  ],
  dps: [
  ],
  tank: [
  ],
};
const images = [
  "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3429c394716364bbef802180e9763d04812757c205e1b4568bc321772096ed86.png",
  "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8dc2a024c9b7d95c7141b2ef065590dbc8d9018d12ad15f76b01923986702228.png",
  "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f979896f74ba22db2a92a85ae1260124ab0a26665957a624365e0f96e5ac5b5c.png",
  "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4d715f722c42215072b5dd0240904aaed7b5285df0b2b082d0a7f1865b5ea992.png",
  "https://d15f34w2p8l1cc.cloudfront.net/overwatch/48392820c6976ee1cd8dde13e71df85bf15560083ee5c8658fe7c298095d619a.png",
  "https://d15f34w2p8l1cc.cloudfront.net/overwatch/6cfb48b5597b657c2eafb1277dc5eef4a07eae90c265fcd37ed798189619f0a5.png",
  "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ca114f72193e4d58a85c087e9409242f1a31e808cf4058678b8cbf767c2a9a0a.png",
  "https://d15f34w2p8l1cc.cloudfront.net/overwatch/13750471c693c1a360eb19d5ace229c8599a729cd961d72ebee0e157657b7d18.png",
  "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f086bf235cc6b7f138609594218a8385c8e5f6405a39eceb0deb9afb429619fe.png",
  "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4edf5ea6d58c449a2aeb619a3fda9fff36a069dfbe4da8bc5d8ec1c758ddb8dc.png",
  "https://d15f34w2p8l1cc.cloudfront.net/overwatch/aecd8fa677f0093344fab7ccb7c37516c764df3f5ff339a5a845a030a27ba7e0.png",
  "https://d15f34w2p8l1cc.cloudfront.net/overwatch/cef2406b2244b80506f83b8fb9ebaf214f41fa8795cbeef84026cd8018561d04.png",
  "https://d15f34w2p8l1cc.cloudfront.net/overwatch/037e3df083624e5480f8996821287479a375f62b470572a22773da0eaf9441d0.png",
  "https://d15f34w2p8l1cc.cloudfront.net/overwatch/088aff2153bdfa426984b1d5c912f6af0ab313f0865a81be0edd114e9a2f79f9.png",
  "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7fc54a1056e11892e1f5366fc15ad50e0e4b4691dedb58ee25da6ee853f3408e.png",
  "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1533fcb0ee1d3f9586f84b4067c6f63eca3322c1c661f69bfb41cd9e4f4bcc11.png",
  "https://d15f34w2p8l1cc.cloudfront.net/overwatch/2508ddd39a178d5f6ae993ab43eeb3e7961e5a54a9507e6ae347381193f28943.png",
  "https://d15f34w2p8l1cc.cloudfront.net/overwatch/000beeb5606e01497897fa9210dd3b1e78e1159ebfd8afdc9e989047d7d3d08f.png",
  "https://d15f34w2p8l1cc.cloudfront.net/overwatch/71e96294617e81051d120b5d04b491bb1ea40e2933da44d6631aae149aac411d.png",
  "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f8261595eca3e43e3b37cadb8161902cc416e38b7e0caa855f4555001156d814.png",
  "https://d15f34w2p8l1cc.cloudfront.net/overwatch/2edb9af69d987bb503cd31f7013ae693640e692b321a73d175957b9e64394f40.png",
  "https://d15f34w2p8l1cc.cloudfront.net/overwatch/490d2f79f8547d6e364306af60c8184fb8024b8e55809e4cc501126109981a65.png",
  "https://d15f34w2p8l1cc.cloudfront.net/overwatch/72e02e747b66b61fcbc02d35d350770b3ec7cbaabd0a7ca17c0d82743d43a7e8.png",
  "https://d15f34w2p8l1cc.cloudfront.net/overwatch/cd7a4c0a0df8924afb2c9f6df864ed040f20250440c36ca2eb634acf6609c5e4.png",
  "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a53bf7ad9d2f33aaf9199a00989f86d4ba1f67c281ba550312c7d96e70fec4ea.png",
  "https://d15f34w2p8l1cc.cloudfront.net/overwatch/20b4ef00ed05d6dba75df228241ed528df7b6c9556f04c8070bad1e2f89e0ff5.png",
  "https://d15f34w2p8l1cc.cloudfront.net/overwatch/bca8532688f01b071806063b9472f1c0f9fc9c7948e6b59e210006e69cec9022.png",
  "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7f2024c5387c9d76d944a5db021c2774d1e9d7cbf39e9b6a35b364d38ea250ac.png",
  "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1309ab1add1cc19189a2c8bc7b1471f88efa1073e9705d2397fdb37d45707d01.png",
  "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a66413200e934da19540afac965cfe8a2de4ada593d9a52d53108bb28e8bbc9c.png",
  "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a714f1cb33cc91c6b5b3e89ffe7e325b99e7c89cc8e8feced594f81305147efe.png",
  "https://d15f34w2p8l1cc.cloudfront.net/overwatch/bd9c8e634d89488459dfc1aeb21b602fa5c39aa05601a4167682f3a3fed4e0ee.png",
  "https://d15f34w2p8l1cc.cloudfront.net/overwatch/5c18e39ce567ee8a84078f775b9f76a2ba891de601c059a3d2b46b61ae4afb42.png",
  "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8819ba85823136640d8eba2af6fd7b19d46b9ee8ab192a4e06f396d1e5231f7a.png",
  "https://d15f34w2p8l1cc.cloudfront.net/overwatch/71cabc939c577581f66b952f9c70891db779251e8e70f29de3c7bf494edacfe4.png",
];
const inOrder = [
  "ana",
  "ashe",
  "baptiste",
  "bastion",
  "brigitte",
  "cassidy",
  "dva",
  "doomfist",
  "echo",
  "genji",
  "hanzo",
  "queen",
  "junkrat",
  "kiriko",
  "lucio",
  "mei",
  "mercy",
  "moira",
  "orisa",
  "pharah",
  "reaper",
  "reinhardt",
  "roadhog",
  "sigma",
  "sojourn",
  "soldier",
  "sombra",
  "symmetra",
  "torbjorn",
  "tracer",
  "widowmaker",
  "winston",
  "ball",
  "zarya",
  "zenyatta",
];
function download(dataurl, filename) {
  const link = document.createElement("a");
  link.href = dataurl;
  link.download = filename + ".png";
  link.click();
}
function assignImageFilenames() {
  Object.keys(heroes).forEach(
    (key) => (heroes[key].image = `/assets/${key}-avatar.png`)
  );
}

function assignRoles() {
  Object.entries(roles).forEach(([roleName, roleHeroes]) =>
    roleHeroes.forEach((roleHero) => (heroes[roleHero].role = roleName))
  );
}
function assignHeroesToRoles(){
  Object.values(heroes).forEach(hero=>roles[hero.role].push(hero));
}
function listAllAssets(){
  const filesList = [];
  fs.readdir('./src/assets', (err, files) => {
    console.log(files);
  });

  console.log(filesList);
}

listAllAssets();
