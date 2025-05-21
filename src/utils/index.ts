/**
 * 
 * @param num - number to format
 * @description Formats a number to a string with M or B suffixes for millions and billions respectively.
 * @returns Formatted number as a string. If the number is less than 1M, it returns the original number.
 * If 
 */


export const formatNumber = (num: string): string => {
    if (!num) return '0';

    const parsedNum = parseFloat(num);

    const options: Intl.NumberFormatOptions = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    };

    if (parsedNum >= 1e9) {
        return (parsedNum / 1e9).toLocaleString(undefined, options) + 'B';
    } else if (parsedNum >= 1e6) {
        return (parsedNum / 1e6).toLocaleString(undefined, options) + 'M';
    } else {
        return parsedNum.toLocaleString(undefined, options);
    }
};