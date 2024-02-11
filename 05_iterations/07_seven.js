// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8]

// const newNums = myNumbers.map( (num) => num + 10)  ///IN case we are using a scope then we should write 
// console.log(newNums);


const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8]

const newNums = myNumbers
                 .map( (num) => num* 10 )
                 .map( (num) => num + 1)
                 .filter( (num) => num >= 40)


console.log(newNums);