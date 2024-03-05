// Country data
let countries = [
  {
    name: "India",
    location: [26.156999, 85.8995065],
  },
  {
    name: "China",
    location: [0.2489634,120.2052342],
  },
  {
    name: "South Africa",
    location: [-29.53897,31.21439],
  },
  {name: "India",
  location: [25.0071053, 72.2653077],
},
  {name: "India",
  location: [25.244263, 87.634808],
},
  {
    name: "India",
location: [26.078108, 82.87422],
},
  {
    name: "India",
location: [28.3501722, 77.5533115]
  },
  {
    name: "China",
    location: [37.48254, 111.5756]
  },
  {
    name: "Pakistan",
    location: [31.1704788, 74.1012446]
  },
  {
    name: "China",
    location: [32.1502714, 101.7037465]
  },
  {
    name: "India",
    location: [26.4956, 77.0275]
  },
  {
    name: "India",
    location: [18.8297654, 77.8001055]
  },
  {
    name: "China",
    location: [31.9827896, 120.8904588]
  },
  {
    name: "India",
    location: [26.3049106, 87.2632847]
  },
  {
    name: "India",
    location: [27.2156849, 77.1982449]
  },
  {
    name: "India",
    location: [24.7358693, 72.9446375]
  },
  {
    name: "Indonesia",
    location: [-6.5745161, 106.6343847]
  },
  {
    name: "China",
    location: [39.23417, 106.34389]
  },
  {
    name: "India",
    location: [25.6650399, 78.4586499]
  },
  {
    name: "India",
    location: [27.1323, 81.6961]
  },
  {
    name: "India",
    location: [23.661154, 87.6962424]
  },
  {
    name: "Mexico",
    location: [19.4162929, -98.9014367]
  },
  {
    name: "India",
    location: [23.435707, 88.594957]
  },
  {
    name: "Indonesia",
    location: [-7.5313771, 110.5972919]
  },
  {
    name: "Mexico",
    location: [20.0574771, -99.63361224421404]
  },
  {
    name: "India",
    location: [19.8376673, 77.8486061]
  },
  {
    name: "South Africa",
    location: [-26.235278, 28.37]
  },
  {
    name: "Mexico",
    location: [18.9617223, -99.5930459]
  },
  {
    name: "South Africa",
    location: [-25.83333, 28.21667]
  },
  {
    name: "India",
    location: [27.4652463, 75.5974065]
  },
  {
    name: "India",
    location: [26.8851057, 78.374679]
  },
  {
    name: "Chile",
    location: [-33.5736124, -71.0848474]
  },
  {
    name: "Pakistan",
    location: [30.4692602, 70.9678776]
  },
  {
    name: "Pakistan",
    location: [30.9777056, 72.4860799]
  },
    { name: "India", location: [29.5372849, 75.0377649] },
    { name: "Pakistan", location: [31.8660402, 73.5038755] },
    { name: "India", location: [25.6497164, 72.4209004] },
    { name: "Pakistan", location: [24.7009508, 70.1784697] },
    { name: "China", location: [28.8661, 101.17] },
    { name: "Mexico", location: [19.4339293, -98.9580149] },
    { name: "China", location: [23.699864, 120.536499] },
    { name: "China", location: [null, null] },
    { name: "India", location: [27.0471366, 76.928784] },
    { name: "India", location: [24.3589377, 75.0700454] },
    { name: "India", location: [27.2524168, 76.4703584] },
    { name: "India", location: [23.2586954, 76.1467445] },
    { name: "Brazil", location: [-22.8219014, -43.0309252] },
    { name: "Indonesia", location: [-6.12319355, 106.58398020360181] },
    { name: "Indonesia", location: [-6.33321675, 106.7226635889224] },
    { name: "India", location: [24.8763185, 74.6390463] },
    { name: "India", location: [22.69972, 88.3519784] },
    { name: "India", location: [22.787632, 88.322982] },
    { name: "India", location: [22.79778, 88.36583] },
    { name: "Australia", location: [-12.489982, 130.9908056] },
    { name: "Indonesia", location: [-6.23713985, 106.56702010021641] },
    { name: "Mexico", location: [19.664926, -99.109648] },
    { name: "South Africa", location: [-25.6297222, 27.7841667] },
    { name: "India", location: [28.6707787, 75.0361419] },
    { name: "India", location: [28.2532652, 77.853916] },
    { name: "India", location: [24.7972148, 76.9647431] },
    { name: "China", location: [28.6581723, 121.4163876] },
    { name: "India", location: [24.9820125, 81.642065] },
    { name: "China", location: [61.31667, 29.55002] },
    { name: "China", location: [34.6586906, 109.2240468] },
    { name: "India", location: [25.217857, 85.733625] },
    { name: "India", location: [26.8023, 84.5074] },
    { name: "Pakistan", location: [31.7223135, 72.9802538] },
    { name: "India", location: [20.2121463, 78.8578248] },
    { name: "India", location: [25.1281931, 82.8835399] },
    { name: "India", location: [26.5151843, 87.0084605] },
    { name: "Pakistan", location: [30.8349067, 72.0764093] },
    { name: "Mexico", location: [19.415556, -98.14] },
    { name: "Mexico", location: [19.4079028, -99.0181547] },
    { name: "China", location: [31.8641913, 120.5110609] },
    { name: "India", location: [25.9526618, 77.9323232] },
    { name: "China", location: [33.2955, 113.653] },
    { name: "India", location: [26.0992137, 74.3127044] },
    { name: "India", location: [24.8524617, 79.0200002] },
    { name: "Iran (Islamic Republic of)", location: [35.480576, 51.0781534] },
    { name: "Namibia", location: [-26.6500086, 15.157266] },
    { name: "Democratic Republic of the Congo", location: [-4.4283572, 26.6700323] },
    { name: "India", location: [33.6787649, 74.9616265] },
    { name: "India", location: [24.2550835, 83.8000067] },
    { name: "India", location: [26.4200687, 82.5382541] },
    { name: "India", location: [26.9472867, 76.57777] },
    { name: "China", location: [36.8616265, 114.5112915] },
    { name: "India", location: [23.8315668, 71.6103884] },
    { name: "India", location: [26.9059419, 77.2924498] },
    { name: "India", location: [17.360589, 78.4740613] },
    { name: "India", location: [26.3018925, 77.6151613] },
    { name: "India", location: [24.5017446, 81.5005517] },
  { name: "Pakistan", location: [27.4985661, 68.4670125] },
  { name: "Pakistan", location: [32.43865, 74.2993] }
];
