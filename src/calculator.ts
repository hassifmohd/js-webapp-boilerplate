const numeral = require('numeral'); //example: using require instead of import

/**
 * Generate random number
 * 
 * @param maxLimit maximum number randomizer can get
 * @returns number
 */
export function randomInt(maxLimit: number) {
    const rand = Math.random() * maxLimit;
    return Math.floor(rand);
}

/**
 * Format the time
 * 
 * @param seconds amount the time in seconds
 * @returns string
 */
export function toTime(seconds: number) {
    return numeral(seconds).format('00:00:00');
}
