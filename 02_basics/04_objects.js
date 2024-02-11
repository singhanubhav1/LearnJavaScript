//  const tinderuser = new Object()
//  const tinderuser = {}
//  console.log(tinderuser);

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "Anubhav",
//             lastname: "Singh"
//         }
//     }
// }
// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname.userfullname.lastname);

//combine of object
const obj1 = {1: "a", 2: "n", 3: "u", 4: "b"}
const obj2 = {5: "h", 6: "a", 7: "v"}

// const obj3 = {obj1, obj2}
//const obj3 = Object.assign(obj1, obj2)
// const obj3 = {...obj1}

// console.log(obj3);

console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));

console.log(typeof obj1, typeof obj2);

