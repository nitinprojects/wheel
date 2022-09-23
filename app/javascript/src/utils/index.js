import * as R from "ramda";

const toCamelCase = str =>
  str
    .split(" ")
    .map((word, i) => {
      if (i === 0) return word.toLowerCase();

      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");

export const isPresent = R.pipe(R.either(R.isNil, R.isEmpty), R.not);

export const buildSelectOptions = values =>
  values.map(value => ({
    label: value,
    value: toCamelCase(value),
  }));
