const ftoc = function (num) {

  return parseFloat(((num - 32) * (.5556)).toFixed(1))
};

const ctof = function (num) {

  return parseFloat(((num * 1.8) + 32).toFixed(1))
};

module.exports = {
  ftoc,
  ctof
};