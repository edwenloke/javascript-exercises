const repeatString = function(string, number) {
    if (number < 0) {
        return 'ERROR';
    }
    let word = '';
    for (let i = 0; i < number; i++) {
        word += string;
    }
    return word;

};

// Do not edit below this line
module.exports = repeatString;
