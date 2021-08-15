const { badRequest } = require('@hapi/boom');

const propertyListings = require('./property_listings.json');

const numberToDollarAmount = number => Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
}).format(number);

const getTotalValues = processedPropertyListings => processedPropertyListings.reduce((acc, { price, squareFeet }) => {

  if (price && squareFeet) {
    acc.pricePerSqFt += (price / squareFeet);
  } 
  
  if (price) {
    acc.price += price 
  };

  return acc;
}, { price: 0, pricePerSqFt: 0});

const processPropertyListings = (stateAbbreviation, minBaths) => {

  const filteredAndTransformedListings = propertyListings.reduce((acc, { id, street, locality, 
    administrativeAreaLevel1, postalCode, price, squareFeet, beds, baths }) => {

    if (administrativeAreaLevel1 === stateAbbreviation && baths >= minBaths) {
      const transformedListing = {
          id,
          addressLine1: street,
          addressLine2: `${locality}, ${administrativeAreaLevel1} ${postalCode}`,
          price,
          squareFeet,
          beds,
          baths
        };

        acc.push(transformedListing);
    };

    return acc;
  }, []);

  return filteredAndTransformedListings.sort((a, b) => (a.squareFeet > b.squareFeet) ? 1 : -1);
};

module.exports = (stateAbbreviation, minBaths) => {

  if (!['CA', 'FL', 'NY'].includes(stateAbbreviation)) {
    throw badRequest('stateAbbreviation must be one of CA, FL, or NY.');
  };

  const processedPropertyListings = processPropertyListings(stateAbbreviation, minBaths);
  const totalValues = getTotalValues(processedPropertyListings);

  console.log('RESULTS:');
  console.log(processedPropertyListings);
  console.log(`Average Price: ${numberToDollarAmount(totalValues.price / processedPropertyListings.length)}\nAverage Price per sqft: ${numberToDollarAmount(totalValues.pricePerSqFt / processedPropertyListings.length)}`);
};

