let newPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("welcome to es-6 worls");
    }, 1000);

    // setTimeout(() => {
    //     reject("Ohh No!");
    // }, 500);
});
let newPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise-2 writing new code");
    }, 2000);
})
// single Promise Call
newPromise1.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});
// muliple Promise Call
Promise.all([newPromise1, newPromise2]).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});

// fecth data from Api

fetch("http://api.icndb.com/jokes/random/10").then((res) => {
    res.json().then((data) => {
        console.log(data);
    });
}).catch((err) => {
    console.log(err);
});