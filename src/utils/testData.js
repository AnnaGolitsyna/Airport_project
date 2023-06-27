const testRowList = [{ airlineName: 'Airline' }, { codeShare: 'Flight' }];
const testFilterArr = [
  {
    airlineLogo: 'https://logos.skyscnr.com/images/airlines/favicon/AZ.png',
    airlineName: 'Alitalia',
    arrivalDate: 1680598147000,
    arrivalDateExpected: 1686385518755,
    city: 'Amsterdam',
    codeShare: 'IB5067',
    date: 1680584547000,
    dateExpected: 1686385518755,
    dateLabel: 'Departed at',
    departureCity: 'Rome',
    id: '99',
    status: 'DP',
    terminal: 'B',
    type: 'DEPARTURE',
  },
  {
    airlineLogo: 'https://logos.skyscnr.com/images/airlines/favicon/LH.png',
    airlineName: 'Lufthansa',
    arrivalDate: 1679957971000,
    arrivalDateExpected: 1686385518755,
    city: 'Berlin',
    codeShare: 'XG398',
    date: 1679921571000,
    dateExpected: 1686385518755,
    dateLabel: 'Departed at',
    departureCity: 'Paris',
    id: '100',
    status: 'DP',
    terminal: 'C',
    type: 'DEPARTURE',
  },
];


export { testFilterArr, testRowList };