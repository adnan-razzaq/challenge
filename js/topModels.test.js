const top = require('./topModels.js')

var data = `ID,Make,Model,Price,UserID,Date
43,Gudereit,EC-5,899,434,2021-05-15
44,Diamant,Beryll,2100,512,2021-05-03
46,Diamant,Juna,1100,432,2021-07-15
51,Gudereit,EC-5,700,534,2021-07-13
56,Gudereit,ET-9 evo,1600,431,2021-06-20
61,Diamant,BERYLL,900,412,2021-07-01
66,AwesomeBikes,Dirt Drifter 3000,1900,399,2021-06-28
67,Kettler,Velossi,1800,532,2021-07-04
78,Gudereit,ec-5,1200,416,2021-07-03
81,Gudereit,EC 5,850,498,2021-04-11
97,Awesome Bikes,Dirt-Drifter-3000,1600,387,2021-05-20
121,Gudereit,ET 9 evo,1900,434,2021-07-15
178,Diamant,beryll,2600,488,2021-06-27
190,Diamant,Mandara,999,420,2021-07-17`

test('Top pedelec Models', () => {
  expect(top(data)).toEqual([
    {
      model: 'ec-5',
      price: '899',
      bikeTitle: 'Gudereit',
      count: 4,
    },
    {
      model: 'beryll',
      price: '2100',
      bikeTitle: 'Diamant',
      count: 3,
    },
    {
      model: 'et-9-evo',
      price: '1600',
      bikeTitle: 'Gudereit',
      count: 2,
    },
  ])
})