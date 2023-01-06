import { makeOpaque, Opaque } from "./opaque";

export type WholeNumber = Opaque<"WholeNumber", number>;

export const castToWholeNumber = (value: number): WholeNumber => {
  if (value <= 0) {
    throw new Error(
      `Expected whole number, ${value} must be greater than zero.`
    );
  }

  if (!Number.isInteger(value)) {
    throw new Error(`Expected whole number, ${value} is not a whole number.`);
  }

  return makeOpaque<WholeNumber>(value);
};
