function twoSums(numbs, target) {
  res = [];

  for (let i = 0; i < numbs.length; i++) {
    for (let c = 0; c < numbs.length; c++) {
      if (numbs[i] + numbs[c] === target) {
        if (numbs.indexOf(numbs[i]) !== numbs.lastIndexOf(numbs[c])) {
          res.push(numbs.indexOf(numbs[i]));
          res.push(numbs.lastIndexOf(numbs[c]));
        }
      }
    }
  }

  res = new Set(res);
  res = Array.from(res);

  return res;
}

module.exports = twoSums;
