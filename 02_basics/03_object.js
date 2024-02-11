//singleton

//object literals
const jsUser = {
    name: "Anubhav",
    age: 20,
    email: "anubhavsingh@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.name);
// console.log(jsUser["name"]);

// console.log(jsUser.email);
// console.log(jsUser["email"]);

// jsUser.email = "anubhavsinghbkj@gmail.com"
// console.log(jsUser.email);

//lock
// Object.freeze(jsUser)

// jsUser.email = "anubhavsinghbk2222j@gmail.com"
// console.log(jsUser.email);


jsUser.greeting = function(){
    console.log("Hello");
}

console.log(jsUser.greeting());