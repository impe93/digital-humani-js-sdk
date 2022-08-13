/*!
 * digital-humani-js-sdk v0.0.0
 * (c) Lorenzo Imperatrice
 * Released under the MIT License.
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Check if value is parseable to number.
 * @example
 * ```js
 * isNumberParseable('AAAA');
 * //=> false
 *
 * isNumberParseable('100');
 * //=> true
 *
 * if (!isNumberParseable(value))
 *   throw new Error('Value can\'t be parseable to `Number`.')
 * return Number(value);
 * ```
 * @param value - An `unknown` value to be checked.
 */
var isNumberParseable = function (value) {
    return !Number.isNaN(Number(value));
};

exports.isNumberParseable = isNumberParseable;
//# sourceMappingURL=index.js.map
