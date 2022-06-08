/*
    for each index of the array, must find the difference between date of death (or current date) and date of birth
    use the reduce function, where the accumulator is the current person with the maximum age

    create an array with a key value pair {index and age} and make that the initial value
    then, cross check the age and the age of the current person. if it is greater, then replace the index

    OR BETTER, USE MAP TO OBTAIN EVERY SINGLE AGE
*/

const findTheOldest = function(people) {


    let oldestAge = 0;
    let indexOfOldest = 0;
    for (let i = 0; i < people.length; i++) {
        const d = new Date();

        let yearDeath = d.getFullYear();
        if (people[i].hasOwnProperty('yearOfDeath')) yearDeath = people[i].yearOfDeath;

        let age = yearDeath - people[i].yearOfBirth;

        if (age > oldestAge) {
            indexOfOldest = i;
            oldestAge = age;
        }
    }

    return people[indexOfOldest];
};

// Do not edit below this line
module.exports = findTheOldest;
