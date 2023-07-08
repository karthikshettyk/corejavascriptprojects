//craeting the promise

let promise = new Promise(function(resolve,reject){
    return "default";
});


promise.then((value)=>{
    console.log("I am resolved with that promis",value);
}).catch((value)=>{
    console.log("I am rejected with that value",value);
}).finally((value)=>{
    console.log("I am execeuted",value);
})


