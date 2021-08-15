const { badRequest } = require('@hapi/boom');

const propertyListings = require('./property_listings.json');

const numberToDollarAmount = number => Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
}).format(number);

const getTotalValues = processedPropertyListings => processedPropertyListings.reduce((acc, listing) => {

  if (listing.price && listing.squareFeet) {
    acc.pricePerSqFt += (listing.price / listing.squareFeet);
  } 
  
  if (listing.price) {
    acc.price += listing.price 
  };

  return acc;
}, { price: 0, pricePerSqFt: 0});

const processPropertyListings = (stateAbbreviation, minBaths) => {

  const filteredAndTransformedListings = propertyListings.reduce((acc, listing) => {

    if (listing.administrativeAreaLevel1 === stateAbbreviation && listing.baths >= minBaths) {
      const transformedListing = {
          id: listing.id,
          addressLine1: listing.street,
          addressLine2: `${listing.locality}, ${listing.administrativeAreaLevel1} ${listing.postalCode}`,
          price: listing.price,
          squareFeet: listing.squareFeet,
          beds: listing.beds,
          baths: listing.baths
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

  if (typeof minBaths !== 'number') {
    throw badRequest('minBaths must be a number');
  } 

  const processedPropertyListings = processPropertyListings(stateAbbreviation, minBaths);
  const totalValues = getTotalValues(processedPropertyListings);

  console.log('RESULTS:');
  console.log(processedPropertyListings);
  console.log(`Average Price: ${numberToDollarAmount(totalValues.price / processedPropertyListings.length)}\nAverage Price per sqft: ${numberToDollarAmount(totalValues.pricePerSqFt / processedPropertyListings.length)}`);
};

