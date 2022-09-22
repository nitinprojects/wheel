import { camelCase } from "lodash";
import * as R from "ramda";

export const isPresent = R.pipe(R.either(R.isNil, R.isEmpty), R.not);

export const buildSelectOptions = values =>
  values.map(value => ({
    label: value,
    value: camelCase(value),
  }));
