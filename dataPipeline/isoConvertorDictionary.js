const csvParser = require('csv-parse/lib/sync');
const fs = require('fs');
const rawData = fs.readFileSync('./rawData/iso2to3.csv');

const ISO_2_INDEX = 1;
const ISO_3_INDEX = 2;

const records = csvParser(rawData);

const dictionary = {};
// Parse raw data to Country-count-dictionary
records.forEach(d => {
    dictionary[d[ISO_2_INDEX]] = d[ISO_3_INDEX];
});
module.exports = dictionary;
