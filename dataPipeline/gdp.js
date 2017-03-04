const csvParser = require('csv-parse/lib/sync');
const fs = require('fs');
const rawData = fs.readFileSync('./rawData/gdp.csv');

const COUNTRY_CODE_INDEX = 0;
const GDP_INDEX = 1;

const records = csvParser(rawData);

const dictionary = {};
// Parse raw data to Country-count-dictionary
records.forEach(d => {
    const countryCode = d[COUNTRY_CODE_INDEX];
    dictionary[countryCode] = d[GDP_INDEX];
});

module.exports = dictionary;
