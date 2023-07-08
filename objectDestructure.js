let obj ={
    "name":"karthik",
    "age":24,
    "gender":"male"
}


let {name:fname,...details}=obj

console.log(fname);
console.log(details);

let {gender}= details;

console.log(gender);