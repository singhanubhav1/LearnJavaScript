// const userEmail = "anubhavsingh@gmail.com"

// if (userEmail){
//     console.log("Got user email");
// }
// else {
//     console.log("Don't have user email");
// }

//falsy values
//false, 0, -0, BigInt onabort, "", null, undefined,

//Truth values
//[], "0", 'false', " ", {}, function(){}




// const userEmail = []


// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }



// const emptyObj = {}

// if (Object.keys(emptyObj).keys === 0) {
//     console.log("Array is empty");
// }


// Nullish Coalescing Operator (??): null undefined

// let val1;
// val1 = 5 ?? 10
//  val1 = null ?? 10
//  val1 = undefined ?? 15
//  val1 = null ?? 10 ?? 50

// console.log(val1);



//Terniary Operator

//condition ? true : false

const bookPrice = 500
bookPrice <= 200 ? console.log("Less than 200") : console.log("more than 200");
