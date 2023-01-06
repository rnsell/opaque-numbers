import { makeOpaque, Opaque } from "./opaque";

export type Integer = Opaque<"Integer", number>;

export const castToInteger = (value: number): Integer => {
  if (!Number.isInteger(value)) {
    throw new Error(`Expected integer number, ${value} is not a integer.`);
  }

  return makeOpaque<Integer>(value);
};
