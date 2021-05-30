const reverseString = function (str) {

    let newString = new String;

    if (str.length === 0) {

        return ''
    }

    for (let i = str.length - 1; i >= 0; i--) {

        newString += str[i]

    }

    return newString
};

module.exports = reverseString;