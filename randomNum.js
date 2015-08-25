var random = {
    randomNum: function(min, max){
    console.log('hello');
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};

module.exports = random;