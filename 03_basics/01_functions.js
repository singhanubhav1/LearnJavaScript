// function sayMyName(){
//     console.log("A");
//     console.log("N");
//     console.log("U");
//     console.log("B");
//     console.log("H");
//     console.log("A");
//     console.log("V");
// }

// sayMyName()


// function addTwoNumbers(number1, number2){  //jo hum function ka defination banate hai, jo hum input lete hai use "argument" kahte hai. 
//     console.log(number1 + number2);
// }

// addTwoNumbers(3, 4)=> jab ham function ko call karate hai, or jo hum value pass karate hai use ham "parameter" kahte hai.



function loginUserMessage(username){
    if (username === undefined) {
        console.log("Please enter a username");
        return
    }
    return `${username} Just logged in`
}

const result = loginUserMessage()
console.log(result);





