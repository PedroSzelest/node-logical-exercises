function divisibleByLeft(n) {
  n = n.toString();
  const array = n.split("");
  const res = [];
  for (let c = 0; c < array.length; c++) {
    if (array.indexOf(array[c]) === 0) {
      res.push(false);
    } else if (parseInt(array[c]) % parseInt(array[c - 1]) === 0) {
      res.push(true);
    } else {
      res.push(false);
    }
  }
  return res;
}

module.exports = divisibleByLeft;
