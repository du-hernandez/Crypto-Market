/**
 * 
 * @param num - number to format
 * @description Formats a number to a string with M or B suffixes for millions and billions respectively.
 * @returns Formatted number as a string. If the number is less than 1M, it returns the original number.
 * If 
 */

export const formatNumber = (num: string) => {
    if (!num) return '0';
    return parseFloat(num) >= 1e9
        ? (parseFloat(num) / 1e9).toFixed(2) + 'B'
        : parseFloat(num) >= 1e6
            ? (parseFloat(num) / 1e6).toFixed(2) + 'M'
            : parseFloat(num).toFixed(2);
};