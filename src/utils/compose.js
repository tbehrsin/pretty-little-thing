const compose = (...composition) => {
  composition.reverse();
  let out = composition.shift();
  let el;
  while ((el = composition.shift())) {
    out = el(out);
  }
  return out;
};

export { compose };
