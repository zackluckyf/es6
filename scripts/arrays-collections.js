/*jshint esversion: 6 */

// array methods
// of method creates array
let salaries = Array.of(90000); // [90000]

let amounts = [800, 810, 820];
// from method creates new array, seems like map
salaries = Array.from(amounts, v => v + 100); // [900, 910, 920]

// fill method positive num starts at position, negative num starts at end
salaries.fill(900, 1); // [900, 900, 900]

// find method returns first true result
let result = salaries.find((item) => item > 800); // 900

// sets
// sets ensure unique items
let perks = new Set();
perks.add('Car');
perks.add('Boat');
perks.add('Car');
let size = perks.size; // 2
perks.has('Car'); // true
perks.has('potato'); // false
