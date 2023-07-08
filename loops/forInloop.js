//For in loop mainly for Object properties


let obj ={
    name:"karthik",
    age:24
}

let arr=["karthik","shetty"];

for(item in obj){
    console.log(obj[item])
}

for(item in arr){
    console.log(arr[item]);
}