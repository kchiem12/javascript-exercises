const repeatString = function(word, amount) {
    counter = amount;
    if (counter == 0) return "";
    else if (counter < 0) return 'ERROR';

    return word + repeatString(word, --counter);
};

// Do not edit below this line
module.exports = repeatString;
