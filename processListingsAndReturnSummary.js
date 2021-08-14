const { badRequest } = require('@hapi/boom');

const propertyListings = require('./property_listings.json');

const numberToDollarAmount = number => Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
}).format(number);

const getPricePerSqFtTotal = processedPropertyListings => processedPropertyListings.reduce((acc, listing) => {

  if (listing.price && listing.squareFeet) {
    acc += (listing.price / listing.squareFeet);
  };

  return acc;
}, 0);

const getPriceTotal = processedPropertyListings => processedPropertyListings.reduce((acc, listing) => {
  if (listing.price) {
  acc += listing.price;
  };
  
  return acc;
}, 0);

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

        return acc;
    };

    return acc;
  }, []);

  return filteredAndTransformedListings.sort((a, b) => (a.squareFeet > b.squareFeet) ? 1 : -1);
};

module.exports = (stateAbbreviation, minBaths) => {

  if (!['CA', 'FL', 'NY'].includes(stateAbbreviation)){
    throw badRequest('stateAbbreviation must be one of CA, FL, or NY.');
  };

  const processedPropertyListings = processPropertyListings(stateAbbreviation, minBaths);
  const priceTotal = getPriceTotal(processedPropertyListings);
  const pricePerSqFtTotal = getPricePerSqFtTotal(processedPropertyListings);

  console.log('RESULTS:');
  console.log(processedPropertyListings);
  console.log(`Average Price: ${numberToDollarAmount(priceTotal / processedPropertyListings.length)}\nAverage Price per sqft: ${numberToDollarAmount(pricePerSqFtTotal / processedPropertyListings.length)}`);
};

