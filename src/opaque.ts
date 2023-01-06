export type Opaque<STRING_LITERAL_TYPE, BASE_TYPE> = BASE_TYPE & {
  __TYPE__: STRING_LITERAL_TYPE;
};

export const makeOpaque = <SOME_TYPE>(type: any) => type as SOME_TYPE;
