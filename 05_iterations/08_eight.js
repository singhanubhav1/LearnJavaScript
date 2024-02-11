 //const myNums = [1, 2, 3]

//  const myTotal = myNums.reduce(function (acc, currval)  {
//     console.log(`acc: ${acc} and currval ${currval}`);
//     return acc + currval
//  }
//  , 19
//  )

//  console.log(myTotal);

//OR Alternative method

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 6)

// console.log(myTotal);






const shoppingCart = [
    {
        itemname: "JS Course",
        price: 2999

    },
    {
        itemname: "DSA Course",
        price: 3999

    },
    {
        itemname: "DATASC. Course",
        price: 12999

    },
    {
        itemname: "PY Course",
        price: 999

    },
]


const priceToPay = shoppingCart.reduce((acc, item) =>  acc + item.price, 0)
console.log(priceToPay);