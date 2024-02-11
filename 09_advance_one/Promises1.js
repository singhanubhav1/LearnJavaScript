

// function getData(dataId, getNextData){
//     setTimeout(() => {
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }

// getData(1, ()=>{
//     getData(2, ()=>{
//         getData(3, ()=>{
//             getData(4)
//         })
//     })
// })









// // program to display time every 3 seconds
// function showTime() {

//     // return new date and time
//     let dateTime= new Date();

//     // returns the current local time
//     let time = dateTime.toLocaleTimeString();

//     console.log(time)

//     // display the time after 3 seconds
//      setInterval(showTime, 3000);
// }


// // calling the function
// showTime();





// // program to display time every 3 seconds
// const hello = function showTime() {

//     // return new date and time
//     let dateTime= new Date();

//     // returns the current local time
//     let time = dateTime.toLocaleTimeString();

//     console.log(time)

//     // display the time after 3 seconds
     
// }

// // calling the function
// setInterval(hello, 3000);






// const cart = ['mobile', 'watch', 'cloth'];

// createOrder(cart, function(orderId){
//     proceedToPayment(orderId);
// });

// ///or

// const promise = createOrder(cart);

// promise.then(functon(orderId){
//     proceedToPayment(orderId)
// });



//Creating a promise

// const cart = ['watch', 'bat', 'shirt'];

// const promise = createOrder(cart);

// promise
// .then(function(orderId){
//     //proceedToPayment(orderId);
//     console.log(orderId);
// })

// .catch(function(err){
//     console.log(err.message);
// })


///producer

// function createOrder(cart){

//     const promise = new Promise(function(resolve, reject){
//         if(!validateCart(cart)){
//             const err = new Error("cart is invalid")  
//             reject(err)

//         }
//         const orderId = 12345;
//         if(orderId){
//             resolve(orderId)
//         }

//     });

//     return promise
// }


// function validateCart(cart){
//     return false
// }





///Async await


// //always return promise
// async function getData(){
// return "Anubhav"
// }

// const dataPromise = getData();
// //console.log(dataPromise);

// dataPromise.then(function(result){
//     return console.log(result);

// })


///Await

const pro = new Promise(function(resolve, reject){
    resolve("Promise resolve value!!");
})

async function handlePromise(){
    const val  = await pro;
    console.log(val);
}

handlePromise();