# BEX Realty Full Stack Engineer Assessment

Find the instructions to complete this assessment below. This should not take more than two hours of your time.


## Requirements

Write a Node.js script that meets the following requirements. The script should work against data in the property_listings.json file. Each
object in this file represents a property for sale.

The script should accept two command line arguments:

```
stateAbbreviation: The state abbreviations supported are: "CA", "FL", and "NY"
minBaths: The minimum number of bathrooms to find
```
First get the data from property_listings.json, then get all houses for sale in the state (stateAbbreviation) that have at least the minimum number of baths (minBaths), and sorted by square footage ascending.

For each element of the filtered list, transform to the following object, and pretty print the results (keeping sort order):
```
{
"id": 1,
"addressLine1": "123 Fake Street",
"addressLine2": "Springfield, CA 90210",
"price": 1000389.91,
"squareFeet": 710,
"beds": 2,
"baths": 1
}
```
For the filtered list, print the average price of all properties (in US currency), and print the average price per square foot of all properties

## Example

e.g. the following runs your script against Florida with the minimum number of baths of 2

```
node index.js FL 2
```
The command line should then print:

```
RESULTS:
[
{
"id": 1,
"addressLine1": "123 Fake Street",
"addressLine2": "Springfield, CA 90210",
"price": 1000389.91,
"squareFeet": 710,
"beds": 2,
"baths": 1
},
// ... more results
]
Average Price: $123,000.22
Average Price per sqft: $12
```

## Submit your work

Upload your project to a public git repository, and send the repository link in an email back to your recruiter.