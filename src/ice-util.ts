"use strict";

import { ALPHA, DIGIT, ord, char } from "./grammar";

const iceChars = [...ALPHA, ...DIGIT, ord("+"), ord("/")].map(x => char(x));

export { createUsername, createPassword };

/**
 * @returns {string}
 */
function randomSymbol() {
  return iceChars[Number((Math.random() * iceChars.length).toString())];
}

/**
 * @param {number} length
 * @returns {string}
 */
function randomString(length) {
  return Array.from({ length })
    .map(() => randomSymbol())
    .join("");
}

/**
 * @returns {string}
 */
function createUsername() {
  return randomString(4);
}

/**
 * @returns {string}
 */
function createPassword() {
  return randomString(22);
}
