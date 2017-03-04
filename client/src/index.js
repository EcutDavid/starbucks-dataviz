import Highcharts from 'highcharts';
require('highcharts/highcharts-more.js')(Highcharts);
import dict from './constants/iso2CountryLookup'

Highcharts.chart('container', {
    chart: {
        type: 'bubble',
        plotBorderWidth: 1,
        zoomType: 'xy'
    },

    legend: {
        enabled: false
    },

    title: {
        text: 'Number of Starbucks stores per country 2016'
    },

    subtitle: {
        text: 'Top 20 countries'
    },

    xAxis: {
        gridLineWidth: 1,
        title: {
            text: 'GDP (current US$) in million'
        },
        labels: {
            format: '{value}'
        }
    },

    yAxis: {
        startOnTick: false,
        endOnTick: false,
        title: {
            text: 'Number of Starbucks stores'
        },
        labels: {
            format: '{value}'
        },
        maxPadding: 0.2
    },

    tooltip: {
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: '<tr><th colspan="2"><h3>{point.countryName}</h3></th></tr>' +
            '<tr><th>Number of stores:</th><td>{point.y}</td></tr>' +
            '<tr><th>GDP(million in $):</th><td>{point.x}</td></tr>',
        footerFormat: '</table>',
        followPointer: true
    },

    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.code}'
            }
        }
    },

    series: [{
      data: [
        { countryName: dict['US'] , code: 'US', y: 13608, z: 13608, x: 1803660 },
        { countryName: dict['CN'] , code: 'CN', y: 2734, z: 2734, x: 1100770 },
        { countryName: dict['CA'] , code: 'CA', y: 1468, z: 1468, x: 155054 },
        { countryName: dict['JP'] , code: 'JP', y: 1237, z: 1237, x: 438308 },
        { countryName: dict['KR'] , code: 'KR', y: 993, z: 993, x: 137787 },
        { countryName: dict['GB'] , code: 'GB', y: 901, z: 901, x: 285800 },
        { countryName: dict['MX'] , code: 'MX', y: 579, z: 579, x: 114379 },
        { countryName: dict['TR'] , code: 'TR', y: 326, z: 326, x: 71788 },
        { countryName: dict['PH'] , code: 'PH', y: 298, z: 298, x: 29245.1 },
        { countryName: dict['TH'] , code: 'TH', y: 289, z: 289, x: 39516.8 },
        { countryName: dict['ID'] , code: 'ID', y: 268, z: 268, x: 86193.4 },
        { countryName: dict['MY'] , code: 'MY', y: 234, z: 234, x: 29628.3 },
        { countryName: dict['DE'] , code: 'DE', y: 160, z: 160, x: 336345 },
        { countryName: dict['AE'] , code: 'AE', y: 144, z: 144, x: 37029.6 },
        { countryName: dict['FR'] , code: 'FR', y: 132, z: 132, x: 241884 },
        { countryName: dict['SG'] , code: 'SG', y: 130, z: 130, x: 29273.9 },
        { countryName: dict['RU'] , code: 'RU', y: 109, z: 109, x: 133121 },
        { countryName: dict['AR'] , code: 'AR', y: 108, z: 108, x: 58316.9 },
        { countryName: dict['KW'] , code: 'KW', y: 106, z: 106, x: 11404.1 },
        { countryName: dict['BR'] , code: 'BR', y: 102, z: 102, x: 177472 }
      ]
    }]
});
