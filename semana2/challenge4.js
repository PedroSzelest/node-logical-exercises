function landMass(name, area) {
  const earth = 148940000;
  const percent = parseFloat(((area / earth) * 100).toFixed(2));
  res = {
    percent,
    message: `${name} representa el ${percent}% de la masa de la tierra`,
  };

  return res;
}

module.exports = landMass;
