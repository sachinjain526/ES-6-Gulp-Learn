"use strict";

var newPromise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("welcome to es-6 worls");
    }, 1000);

    // setTimeout(() => {
    //     reject("Ohh No!");
    // }, 500);
});
var newPromise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Promise-2 writing new code");
    }, 2000);
});
// single Promise Call
newPromise1.then(function (res) {
    console.log(res);
}).catch(function (err) {
    console.log(err);
});
// muliple Promise Call
Promise.all([newPromise1, newPromise2]).then(function (data) {
    console.log(data);
}).catch(function (err) {
    console.log(err);
});

// fecth data from Api

fetch("http://api.icndb.com/jokes/random/10").then(function (res) {
    res.json().then(function (data) {
        console.log(data);
    });
}).catch(function (err) {
    console.log(err);
});