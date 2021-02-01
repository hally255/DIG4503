//Promise
let dog = new Promise((resolve, reject) => {
    let sadie = "dog";
    if (sadie == "dog") {
        resolve("Succcess");
    } else {
        reject("Failed");
    }
});
dog.then((message) => {
    console.log("Sadie is a dog");
}).catch((message) => {
    console.log("Sadie is not a dog");
});

//TimeOut Function
let dog = new Promise((resolve, reject) => {
    let sadie = "dog";
    setTimeout(function () {
        if (sadie == "dog") {
            resolve("Succcess");
        } else {
            reject("Failed");
        }
    }, 5000);
});
dog.then((message) => {
    console.log("Sadie is a dog");
}).catch((message) => {
    console.log("Sadie is not a dog");
});
