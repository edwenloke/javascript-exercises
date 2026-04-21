const fibonacci = function(n) {
    if (!Number.isInteger(Number(n))) {
        return;
    } else {
        let count = Number(n);
        n = count;
    }
    
    if (n < 0) return 'OOPS';
    if (n <= 1) return n;

    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return b;

};




// Do not edit below this line
module.exports = fibonacci;
