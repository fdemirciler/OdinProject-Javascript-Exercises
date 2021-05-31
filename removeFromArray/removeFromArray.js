// removeFromArray([1, 2, 3, 4], 3, 2)

const removeFromArray = function (...arr) {

    const removeIndex = arr.slice(1)
    const removeObject = arr[0]

    removeIndex.forEach(function (i) {

            if (removeObject.includes(i)) {

                removeObject.splice(removeObject.indexOf(i), 1);


            }
        }

    )

    return removeObject
};

module.exports = removeFromArray;