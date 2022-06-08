const reverseString = function(string) {
    individualChars = string.split("");

    reverseChar = new Array(individualChars.length);
    for (let i = 0; i < individualChars.length; i++) {
        reverseChar[i] = individualChars[(individualChars.length-1)-i];
    }

    return reverseChar.join("");
};

// Do not edit below this line
module.exports = reverseString;
