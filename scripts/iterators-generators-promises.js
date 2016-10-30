/*jshint esversion: 6 */

// generators

function* process() {
    yield 8000;
    yield 8001;
}
let it = process();
it.next(); // {value: 8000, done: false}
it.next(); // {value: 8001, done: false}
it.next(); // {value: undefined, done: true}

// yield* utilizes an iterator until exhausted
function* hey() {
    yield 42;
    yield*[1, 2, 3];
}
it = hey();
it.next(); // {value: 42, done: false}
it.next(); // {value: 1, done: false}
it.next(); // {value: 2, done: false}
it.next(); // {value: 3, done: false}
it.next(); // {value: undefined, done: true}

// promises

// avoiding anonymous functions isn't easy
// try splitting this up later
// code much more verbose but also much easier to reason about

let doAsync = function() {
    let p = new Promise(function(resolve, reject) {
        console.log('in promise1 code');
        setTimeout(function() {
            console.log('resolving');
            resolve('promise1 success');
        }, 2000);
    });
    return p;
};

doAsync().then(function(value) {
    console.log(`success in 2 + ${value}`);
}).catch(err => {
    console.log(`failure in 1 + ${err}`);
});

let doAsync2 = function() {
    let p = new Promise(function(resolve, reject) {
        console.log('in promise2 code');
        setTimeout(function() {
            console.log('rejecting');
            reject('promise2 failure');
        }, 2000);
    });
    return p;
};

doAsync2().then(function(value) {
    console.log(`success in 2 ${value}`);
}).catch(err => {
    console.log(`failure in 2 ${err}`);
});

Promise.all([doAsync(), doAsync2()]).then(value => {
    console.log(`Promise.all success ${value}`);
}).catch(err => {
    console.log(`Promise.all failure because ${err}`);
});

Promise.race([doAsync(), doAsync2()]).then(value => {
    console.log(`Promise.race success because ${value}`);
}).catch(err => {
    console.log(`Promise.race failure because ${err}`);
});
