/*jshint esversion: 6 */

// let key word makes for loop closures more intuitive

let updateFunctions = [];
for (var i = 0; i < 2; i++) {
    updateFunctions.push(() => i);
}
(updateFunctions[0]()); // 2
// prints out 2 because it creates a closure that will always print out
// the last iteration value for every function
updateFunctions = [];
for (let i = 0; i < 2; i++) {
    updateFunctions.push(() => i);
}
(updateFunctions[0]()); // 0
// prints out 0 because it doesn't create a closure

// fat arrow functions
// function that automatically lexically scopes the calling context
// seems like good convention to always just wrap yoour arrow functions in ()
(function() {
    return 5;
})(); // 5
(() => 5)(); // 5

// best way to think about fat arrow functions is in the sense of
// input returns output
var l = 0;
for (var i = 0; i < 5; i++) {
    var x = ((j) => j * 2);
    l += x(i);
} // l = 20


(() => "foobar")(); // IIFE, returns "foobar"

var simple = a => a > 15 ? 15 : a;
simple(16); // 15
simple(10); // 10

let max = (a, b) => a > b ? a : b;
max(3, 4); // 4

var arr = [5, 6, 13, 0, 1, 18, 23];
var sum = arr.reduce((a, b) => a + b); // 66
var even = arr.filter(v => v % 2 === 0); // [6, 0, 18]
var double = arr.map(v => v * 2); // [10, 12, 26, 0, 2, 36, 46]

// quit writing anonymous functions, use the var x = () => 4
// kind of style to make debugging easier

// default parameters
var getProduct = (productId = 1000) => productId;
getProduct(); // 1000
getProduct(2000); //2000

// rest operator
var nameArray = new Function('...names', 'return names;');
x('bob', 'john'); // ['bob', 'john']

// spread operator
var numArray = [1, 5, 6, 23, 12, 24]; {
    let max = Math.max(...numArray); // 24
}
// works on arrays and strings
let zipcode = '43210';
let maxLetter = Math.max(...zipcode); // 4

// template literals
let invoiceNum = '1350';
// gets directly placed into string
var simpleInterpolation = `Invoice Number: ${invoiceNum}`; // Invoice Number: 1350
// can use expressions in templates
var expressionInterpolation = `Invoice Number: ${'INV-' + invoiceNum}`; // Invoice Number: INV-1350

//destructuring
let salary = [33000, 56000, 80000];
let [low, mid, high] = salary; // low = 33000, mid = 56000, high = 80000
let remaining;
// can use rest operators as well
[low, ...remaining] = salary; // low = 33000, remaining = [56000, 80000]

let actualLow, actualHigh;
salary = [33000, 56000, [80000, 90000]];
// can destructure nested arrays
[low, mid, [actualLow, actualHigh]] = salary; // low = 33000, mid = 56000, actualLow = 80000, actualHigh = 90000

// can destructure objects as well
// have to make sure variable names match property names
// have to wrap object destructuring so it doesn't look like a block
salary = {
    low: 33000,
    mid: 56000,
    high: 80000
};
({
    low,
    mid,
    high
} = salary); // low = 33000, mid = 56000, high = 80000
