const csvParser = require('csv-parse/lib/sync');
const fs = require('fs');
const _ = require('lodash');
const rawData = fs.readFileSync('./rawData/starbucks.csv');

const COUNTRY_CODE_INDEX = 7;

const records = csvParser(rawData);

const dictionary = {};
// Parse raw data to Country-count-dictionary
records.forEach(d => {
    const countryCode = d[COUNTRY_CODE_INDEX];
    if (!dictionary[countryCode]) {
        dictionary[countryCode] = 1;
    } else {
        dictionary[countryCode]++;
    }
});

let sotreCountList = _.transform(dictionary, (result, value, key) => {
    if (key !== 'TW') {
        result.push({
            code: key,
            count: value
        });
    }
}, []);
sotreCountList = _.sortBy(sotreCountList, ({count}) => -count);

const starBucksResult =  _.slice(sotreCountList, 0, 20);

module.exports = starBucksResult;
