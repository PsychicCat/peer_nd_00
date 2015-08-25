var value = require('./randomNum.js');
var convert = require('./currencyConvert.js');

var balanceNum = {
    numOutput: convert.usd(value.randomNum(100, 1000000)),
    textOutput: function(){
        return "Account balance: \n";
    }
};


module.exports = balanceNum;