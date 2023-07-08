let arr=["karthik","shetty","kakathota"]

arr.push("baby");

console.log(arr);

arr.pop();

console.log(arr);

arr.shift();

console.log(arr);

arr.unshift("teja");

console.log(arr);


//arry.map

let array =["karthik","shetty"];

let modifiedArray = array.map((val)=>{
    return (val+"kakathota")
})

console.log("orginal array:",array);

console.log("modified array",modifiedArray);

//array.filter

let array2 =["karthik","shetty"];

let filterArray = array2.filter((val)=>{
 return val==="karthik"
})

console.log(filterArray);

//Reduce Function
let arr3 =[1,2];

let result = arr3.reduce((acc,curr)=>{
   return acc+curr
},1)

console.log(result);
