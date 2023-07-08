//forLoop mainly used for arrays

let arr=["karthik","shetty"]

for (item of arr){
    console.log(item);
}

let obj= {
    "name":"karthik",
    "age":24
}

for ([key,value] of Object.entries(obj)){
    console.log(key);
    console.log(value);
}