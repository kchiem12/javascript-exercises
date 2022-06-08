const palindromes = function (string) {
    editString = string
    editString = editString.toLowerCase().replace(/\s/g, '');
    editString = editString.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, ''); //removes all punctuation

    cleanString = editString;

    editString = editString.split('');
    temp = editString
    for (let i = 0; i < editString.length; i++) {
        editString[i] = temp[editString.length - 1 - i];
    }

    editString = editString.join('');
    if (editString===cleanString) return true;
    return false;
    
};

// Do not edit below this line
module.exports = palindromes;
