const sumAll = function (...arg) {

    const maxNumber = Math.max(...arg);
    const minNumber = Math.min(...arg);
    let sumThem = 0;


    for (let x = 0; x < arg.length; x++) {

        if ((isNaN(arg[x]) || (arg[x] < 0) || (typeof arg[x] === 'string'))) {

            return 'ERROR'
        }

    }


    for (let i = minNumber; i < maxNumber + 1; i++) {
        sumThem += i;

    }

    return sumThem
};



module.exports = sumAll;