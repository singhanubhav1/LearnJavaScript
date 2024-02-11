//Imemediately Invoked Function Expression (IIFE)

(function DataBase(){   //This is name IIFE because it has name
    console.log(`DB CONNECTED`);
})();          //DB CONNECTED,   gloable scope ke pollution se problem hota hai bht baar

//or
(()=>{  //Simple IIFE
    console.log(`DB CONNECTED TWO`);
})();


//or
((name)=>{  //Simple IIFe
    console.log(`DB CONNECTED TWO ${name}`);
})("Ritu")





