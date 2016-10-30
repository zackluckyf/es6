/*jshint esversion: 6 */

// new string methods
let title = 'blah blah blah words';
title.includes('bl'); // true
title.repeat(2); // blah blah blah wordsblah blah blah words

// new Number methods
Number.parseInt('34'); // 34
Number.parseFloat('23.4'); // 23.4
Number.isNaN('NaN'); // false
Number.isNaN(NaN); // true
Number.isFinite('8000'); // false
Number.isFinite(8000); // true
Number.isInteger(34.2); // false
let a = Math.pow(2, 53) - 1;
Number.isSafeInteger(a); // true
a = Math.pow(2, 53);
Number.isSafeInteger(a); // false

// new Math methods
// truncate
Math.trunc(23.4); // 23
// cube root
Math.cbrt(27); // 3
