var numeral = require('numeral');

var currencyConvert = {
    usd: function(num){
        return numeral(num).format('$0,0.00');
    }
}

module.exports = currencyConvert;