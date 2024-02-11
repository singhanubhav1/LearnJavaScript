const coading = ['js', 'ruby', 'java', 'python', 'cpp']

// //for each
// coading.forEach( function (val){
//     console.log(val);  //callback function me functio ka name nahi diya jata hai
// })

//or

// coading.forEach((item) => {
//     console.log(item);
// })

//or

// function printMe(item){
//     console.log(item);
// }
// coading.forEach(printMe)

//New Method
// coading.forEach((item, index, arr) => {
//         console.log(item, index, arr);
//     })



const myCoding = [
    {
        LanguageName: "javascript",
        LanguageFileName: "js"

    },
    {
    
        LanguageName: "java",
        LanguageFileName:"java"

    },
    {
        LanguageName: "python",
        LanguageFileName:"py"

    },
]


myCoding.forEach( (item) => {
    console.log(item.LanguageName);
    //console.log(item.LanguageFileName);
})

