const sumAll = function(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || num1 < 0 || num2 < 0) return 'ERROR';

    start = Math.min(num1, num2);
    dist = Math.abs(num1-num2);
    result = 0;

    for (let i = start; i <= (start+dist); i++) {
        result = result + i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
