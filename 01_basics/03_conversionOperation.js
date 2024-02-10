// let score = "50abc"

// console.log(typeof score);
// console.log(typeof(score));

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
//console.log(valueInNumber);

//"50" => 50
//"50abc" => NaN
//true => 1; false => 0

//let isLoggedIn = "Anubhav"

//let booleanIsLoggedIn = Boolean(isLoggedIn);
//console.log(booleanIsLoggedIn);

//1 => true; 0 => false
//"" => false
//"Anubhav" => true

// let someNumber = 33

// let stringNumber = String(someNumber)

// console.log(stringNumber);
//console.log(typeof stringNumber)

//***************************************Operations*************************************** */
//let value = 5
// let negValue = -value

// console.log(negValue);

// let str1 = "Anubhav"
// let str2 = " Singh"

// let str3 = str1 + str2

// console.log(str3);

// console.log(1+"2"+"4");
// console.log(1+2+"3");

// console.log(true);
// console.log(false);
// console.log("");



// let num1 = 99
// num1++
// console.log(num1);

//**********************************************/
//stack(Primitive), Heap(Non-Primitive)
//Stack
let myYoutube = "anubhavdotcom"

let anothername = myYoutube
anothername = "singhdotcom"

console.log(myYoutube)
console.log(anothername);

//Heap

let userOne = {
    email: "user@gmail.com", 
    upi: "user@ybl" 
      
}

let userTwo = userOne

userTwo.email = "anubhavsinghbkj@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

