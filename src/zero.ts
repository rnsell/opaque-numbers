import { makeOpaque, Opaque } from "./opaque";

export type Zero = Opaque<"Zero", number>;

export const castToZeroType = (value: number): Zero => {
  if (value !== 0) {
    throw new Error(`Expected 0, got ${value}`);
  }

  return makeOpaque<Zero>(value);
};
