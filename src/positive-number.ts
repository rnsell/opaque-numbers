import { makeOpaque, Opaque } from "./opaque";

export type PositiveNumber = Opaque<"PositiveNumber", number>;

export const castToPositiveNumber = (value: number): PositiveNumber => {
  if (value === 0) {
    throw new Error(
      `Expected positive number, zero is not a positive or negative number.`
    );
  }

  if (value > 0) {
    throw new Error(
      `Expected positive number, ${value} is not a positive number.`
    );
  }

  return makeOpaque<PositiveNumber>(value);
};
