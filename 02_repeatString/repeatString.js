const repeatString = function(word, amount) {
    counter = amount;
    if (counter == 0) return "";

    return word + repeatString(word, --counter);
};

// Do not edit below this line
module.exports = repeatString;
