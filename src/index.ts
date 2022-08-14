/**
 * A Branded Type for values parseable to number.
 */
export type NumberParseable = (number | string | boolean) & {
  readonly isNumberParseble: unique symbol;
};

/**
 * It returns true if the value can be converted to a number without throwing an error
 * @param {unknown} value - unknown - The value to check if it's a number.
 */
export const isNumberParseable = (value: unknown): value is NumberParseable =>
  !Number.isNaN(Number(value));
