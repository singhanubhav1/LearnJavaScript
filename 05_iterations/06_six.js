// const coading = ['js', 'ruby', 'java', 'python', 'cpp']

// const values = coading.forEach((item) => {
//     console.log(item);
//     return item
// })

// console.log(values); // undefined, foreach doesn't give any value



// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 5


// })
// console.log(newNums);





// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => (num > 5) // yaha pe return nahi karna hai kyuki {} => () ye use kar rhe hai 
// )
// console.log(newNums);
//or



const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = []

myNums.forEach( (num) => {
    if (num > 4){
        newNums.push(num)
    }
    
})
console.log(newNums);