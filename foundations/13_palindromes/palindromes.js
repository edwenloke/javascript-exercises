const palindromes = function (string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const cleanString = string
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('')


    const reversedString = cleanString.split('').reverse().join('');

    return reversedString === cleanString;

};

// Do not edit below this line
module.exports = palindromes;
