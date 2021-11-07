function arrayOfMultiples(num, length) {
  const res = [];
  for (let i = 1; i < length + 1; i++) {
    res.push(num * i);
  }

  return res;
}

module.exports = arrayOfMultiples;
