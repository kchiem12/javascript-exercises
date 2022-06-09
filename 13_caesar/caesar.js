/*

IMPORTANT THING TO NOTE:

so i think that doing arr[i] = something; causes the array to reset
what helped was making a new array and pushing values into it in order to not cause the array to 
turn into a number after the for loop

why is this? idk lol

*/


const caesar = function(string, shift) {

    let result = [];
    let splitString = string.split('').map(x => x.charCodeAt(0));
    let theShift = shift % 26;


    for (let i = 0; i < splitString.length; i++) {
        let ascii = splitString[i];

        if (ascii >= 65 && ascii <=90) {
            let shiftedString = ascii + theShift;

            if (shiftedString < 65) {
                shiftedString = shiftedString + 26;
                result.push(shiftedString);
            }
            else if (shiftedString > 90) {
                shiftedString = shiftedString - 26;
                result.push(shiftedString);
            }
            else result.push(shiftedString);
        }
        else if (ascii >= 97 && ascii <= 122) {
            let shiftedString = ascii + theShift;

            if (shiftedString < 97) {
                shiftedString = shiftedString + 26;
                result.push(shiftedString);
            }
            else if (shiftedString > 122) {
                shiftedString = shiftedString - 26;
                result.push(shiftedString);
            }
            else result.push(shiftedString);
        }
        else result.push(ascii);
    }


    result = result.map(x => String.fromCharCode(x));
    return result.join('');
};


// Do not edit below this line
module.exports = caesar;
