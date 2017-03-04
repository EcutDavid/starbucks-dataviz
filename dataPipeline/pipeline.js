const starbacksData = require('./starbacks');
const gdpDataDictionary = require('./gdp');
const isoConvertor = require('./isoConvertorDictionary');

// Integrate GDP data with starbacks data
starbacksData.forEach(d => {
    d['gdp'] =  Number(gdpDataDictionary[isoConvertor[d.code]]);
});
console.log(starbacksData);
