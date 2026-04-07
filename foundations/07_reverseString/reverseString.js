const reverseString = function(word) {
    if (word.trim() === '')
        return '';
    return word.split('').reverse('').join('');
};

console.log(reverseString('abc 123'));


// Do not edit below this line
module.exports = reverseString;
