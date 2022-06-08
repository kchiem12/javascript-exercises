/*

can use splice() <-- to remove some parts from the array
slice() <-- does not remove anything from the original array, but can bring elements to a new array
at() <-- can use for indexing an array
findIndex() <-- can be used to find a specified element
...<-- used to specify an indefinite number of arguments

maybe use the filter() method to filter out everything listed

*/

const removeFromArray = function(arr, ...theArgs) {
    return arr.filter(element => !theArgs.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
