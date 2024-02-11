///////////promise.all()

// const p1 = new Promise(function(resolve, reject){
//     setTimeout(() => resolve("P1 is success"), 5000);
// });


// const p2 = new Promise(function(resolve, reject){
//     setTimeout(() => resolve("P2 is success"), 4000);
// });


// const p3 = new Promise(function(resolve, reject){
//     setTimeout(() => resolve("P3 is success"), 3000);
// });


// const p4 = new Promise(function(resolve, reject){
//     setTimeout(() => resolve("P4 is success"), 2000);
// });

// Promise.all([p1, p2, p3])
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//    console.error(err);;
// });



// const p1 = new Promise(function(resolve, reject){
//     setTimeout(() => resolve("P1 is success"), 5000);
// });


// const p2 = new Promise(function(resolve, reject){
//     setTimeout(() => resolve("P2 is success"), 4000);
// });


// const p3 = new Promise(function(resolve, reject){
//     setTimeout(() => resolve("P3 is success"), 3000);
// });


// const p4 = new Promise(function(resolve, reject){
//     setTimeout(() => resolve("P4 is success"), 2000);
// });

// Promise.all([p1, p2, p3])
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//    console.error(err);;

// })

//////////////////promise.allsettled()

// const p1 = new Promise(function(resolve, reject){
//     setTimeout(() => resolve("P1 is success"), 5000);
// });


// const p2 = new Promise(function(resolve, reject){
//     setTimeout(() => resolve("P2 is success"), 4000);
// });


// const p3 = new Promise(function(resolve, reject){
//     setTimeout(() => resolve("P3 is success"), 3000);
// });


// const p4 = new Promise(function(resolve, reject){
//     setTimeout(() => resolve("P4 is success"), 2000);
// });

// Promise.allSettled([p1, p2, p3])
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//    console.error(err);;
// });



const p1 = new Promise(function(resolve, reject){
    setTimeout(() => resolve("P1 is success"), 5000);
});


const p2 = new Promise(function(resolve, reject){
    setTimeout(() => resolve("P2 is success"), 4000);
});


const p3 = new Promise(function(resolve, reject){
    setTimeout(() => resolve("P3 is success"), 3000);
});


const p4 = new Promise(function(resolve, reject){
    setTimeout(() => reject("P4 is fail"), 2000);
});

Promise.allSettled([p1, p2, p3])
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
   console.error(err);;
});

