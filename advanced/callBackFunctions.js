//call back should be passed as a argument in other function


function concateName(firstname){
    let fullName =firstname+"kakathota";
    return fullName;
}

function display(firstname,concateName){
   let fullname= concateName(firstname);
   console.log(fullname);
}


let firstname="karthik"
display(firstname,concateName);