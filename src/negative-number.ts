import { makeOpaque, Opaque } from "./opaque";

export type NegativeNumber = Opaque<"NegativeNumber", number>;

export const castToNegativeNumber = (value: number): NegativeNumber => {
  if (value === 0) {
    throw new Error(
      `Expected negative number, zero is not a positive or negative number`
    );
  }

  if (value > 0) {
    throw new Error(
      `Expected negative number, ${value} is not a negative number`
    );
  }

  return makeOpaque<NegativeNumber>(value);
};
