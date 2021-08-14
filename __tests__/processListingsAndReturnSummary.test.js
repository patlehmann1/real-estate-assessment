const processListingsAndReturnSummary = require('../processListingsAndReturnSummary');

console.log = jest.fn();

jest.mock('../property_listings.json', () => ([
{
  "id": 1,
  "street": "6585 Mitchell Point",
  "locality": "Los Angeles",
  "administrativeAreaLevel1": "CA",
  "postalCode": "90030",
  "price": 25397044.01,
  "squareFeet": 1552,
  "beds": 11,
  "baths": 9,
  "description": "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
  "createDate": "2021-04-06T19:10:10Z"
},
{
  "id": 2,
  "street": "92 West Lane",
  "locality": "Stockton",
  "administrativeAreaLevel1": "CA",
  "postalCode": "95298",
  "price": 15120021.96,
  "squareFeet": 2017,
  "beds": 17,
  "baths": 7,
  "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  "createDate": "2021-03-30T21:05:48Z"
},
{
  "id": 9,
  "street": "794 Northport Court",
  "locality": "Sacramento",
  "administrativeAreaLevel1": "CA",
  "postalCode": "95838",
  "price": 27333897.65,
  "squareFeet": 4452,
  "beds": 17,
  "baths": 1,
  "description": null,
  "createDate": "2021-04-27T09:34:47Z"
},
{
  "id": 26,
  "street": "656 Cottonwood Pass",
  "locality": "Long Beach",
  "administrativeAreaLevel1": "CA",
  "postalCode": "90847",
  "price": 9570826.0,
  "squareFeet": 599,
  "beds": 8,
  "baths": 0,
  "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
  "createDate": "2020-08-03T04:26:18Z"
},
{
  "id": 27,
  "street": "397 Fallview Point",
  "locality": "Naples",
  "administrativeAreaLevel1": "FL",
  "postalCode": "34102",
  "price": 10118026.0,
  "squareFeet": 7419,
  "beds": 13,
  "baths": 4,
  "description": null,
  "createDate": "2020-03-15T21:17:17Z"
},
{
  "id": 4,
  "street": "5 Glendale Court",
  "locality": "Tallahassee",
  "administrativeAreaLevel1": "FL",
  "postalCode": "32399",
  "price": 17242662.87,
  "squareFeet": 2884,
  "beds": 13,
  "baths": 7,
  "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  "createDate": "2020-09-01T18:07:20Z"
},
{
  "id": 5,
  "street": "33715 Eagle Crest Trail",
  "locality": "Orlando",
  "administrativeAreaLevel1": "FL",
  "postalCode": "32854",
  "price": 21281345.42,
  "squareFeet": 2278,
  "beds": 4,
  "baths": 6,
  "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  "createDate": "2020-12-06T11:47:12Z"
},
{
  "id": 8,
  "street": "783 Lake View Terrace",
  "locality": "Miami",
  "administrativeAreaLevel1": "FL",
  "postalCode": "33190",
  "price": 8418585.0,
  "squareFeet": 5792,
  "beds": 18,
  "baths": 1,
  "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
  "createDate": "2020-09-24T11:05:15Z"
},
{
  "id": 6,
  "street": "8 Killdeer Plaza",
  "locality": "New York City",
  "administrativeAreaLevel1": "NY",
  "postalCode": "10270",
  "price": 6704247.0,
  "squareFeet": 3983,
  "beds": 7,
  "baths": 5,
  "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  "createDate": "2020-04-05T02:11:13Z"
},
{
  "id": 7,
  "street": "18069 Fieldstone Road",
  "locality": "Albany",
  "administrativeAreaLevel1": "NY",
  "postalCode": "12255",
  "price": 15867290.96,
  "squareFeet": 1824,
  "beds": 18,
  "baths": 5,
  "description": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
  "createDate": "2020-05-29T19:24:02Z"
},
{
  "id": 12,
  "street": "39746 Hoepker Alley",
  "locality": "New York City",
  "administrativeAreaLevel1": "NY",
  "postalCode": "10060",
  "price": 15265354.36,
  "squareFeet": 2768,
  "beds": 3,
  "baths": 3,
  "description": "Fusce consequat. Nulla nisl. Nunc nisl.",
  "createDate": "2020-09-02T21:08:37Z"
},
{
  "id": 40,
  "street": "63340 Milwaukee Road",
  "locality": "Syracuse",
  "administrativeAreaLevel1": "NY",
  "postalCode": "13251",
  "price": 2306595.84,
  "squareFeet": 957,
  "beds": 12,
  "baths": 5,
  "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  "createDate": "2020-01-19T20:57:28Z"
}]));

beforeEach(() => {
  jest.resetAllMocks();
})

const expectedResult1 = [
  {
    id: 1,
    addressLine1: "6585 Mitchell Point",
    addressLine2: "Los Angeles, CA 90030",
    price: 25397044.01,
    squareFeet: 1552,
    beds: 11,
    baths: 9
  },
  {
    id: 2,
    addressLine1: "92 West Lane",
    addressLine2: "Stockton, CA 95298",
    price: 15120021.96,
    squareFeet: 2017,
    beds: 17,
    baths: 7
  },
  {
    id: 9,
    addressLine1: "794 Northport Court",
    addressLine2: "Sacramento, CA 95838",
    price: 27333897.65,
    squareFeet: 4452,
    beds: 17,
    baths: 1
  }];

  const expectedResult2 = [
    {
      id: 5,
      addressLine1: "33715 Eagle Crest Trail",
      addressLine2: "Orlando, FL 32854",
      price: 21281345.42,
      squareFeet: 2278,
      beds: 4,
      baths: 6
    },
    {
      id: 4,
      addressLine1: "5 Glendale Court",
      addressLine2: "Tallahassee, FL 32399",
      price: 17242662.87,
      squareFeet: 2884,
      beds: 13,
      baths: 7
    },
    {
      id: 8,
      addressLine1: "783 Lake View Terrace",
      addressLine2: "Miami, FL 33190",
      price: 8418585.0,
      squareFeet: 5792,
      beds: 18,
      baths: 1
    },
    {
      id: 27,
      addressLine1: "397 Fallview Point",
      addressLine2: "Naples, FL 34102",
      price: 10118026.0,
      squareFeet: 7419,
      beds: 13,
      baths: 4
    }
  ];

console.log(processListingsAndReturnSummary);

describe('REAL ESTATE COMPANY FULL STACK ENGINEER ASSESSMENT', () => {
  test('should filter, process, and sort results to return alongside average price and average price per sq ft, TEST ONE', () => {
    processListingsAndReturnSummary('CA', 1);
    expect(console.log).toHaveBeenNthCalledWith(1, 'RESULTS:'),
    expect(console.log).toHaveBeenNthCalledWith(2, expectedResult1);
    expect(console.log).toHaveBeenNthCalledWith(3, 'Average Price: $22,616,987.87\nAverage Price per sqft: $10,000.02');
  });

  test('should filter, process, and sort results to return alongside average price and average price per sq ft, TEST TWO', () => {
    processListingsAndReturnSummary('FL', 1);
    expect(console.log).toHaveBeenNthCalledWith(1, 'RESULTS:'),
    expect(console.log).toHaveBeenNthCalledWith(2, expectedResult2);
    expect(console.log).toHaveBeenNthCalledWith(3, 'Average Price: $14,265,154.82\nAverage Price per sqft: $4,534.53');
  });
});