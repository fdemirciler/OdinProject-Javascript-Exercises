const leapYears = function (num) {

    if ((num % 4 === 0) && ((num % 400 === 0) || (num % 100 !== 0))) {
        return true
    }

    return false
};

module.exports = leapYears;