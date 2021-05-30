// const helloWorld = require("../helloWorld/helloWorld");

const repeatString = function (word, num) {

    let newWord = new String;

    if (num < 0) {

        return 'ERROR'

    } else if (num === 0) {

        return ''

    }


    for (let i = 0; i < num; i++) {

        newWord += word

    }
    return newWord
};

module.exports = repeatString;