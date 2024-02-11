//if-else
//<, >, <=, >=, ==, !=, === 


// const isUserloggedIn = true
// const temprature = 55

// if (temprature<50) {
//     console.log("less than 50");
// }
// else{
//     console.log("greater than 50");
// }


// const score = 200

// if(score>100){
//     let power = "fly"
//     console.log(`User power: ${power}`)
// }
// console.log(`User power: ${power}`); //gloable variable can't be acces local variable



// const balance = 1000

// // if(balance > 500) console.log("test");

// if (balance < 500) {
//     console.log("less tahn 500");
// }
// else if(balance < 800){
//     console.log("less tahn 800");
// }
// else{
//     console.log("less tahn 1200");
// }


const isUserloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
 

if (isUserloggedIn && debitCard) {
    console.log("allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}