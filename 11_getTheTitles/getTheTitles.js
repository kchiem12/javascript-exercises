const getTheTitles = function(books) {
    titles = [];
    for (let i = 0; i < books.length; i++) {
        titles.push(Object.values(books[i])[0]);
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
