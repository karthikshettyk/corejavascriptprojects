//Async and Await mostly used in the fetching the data

async function loadDataFromApi (){
   let data =await fetch("https://api.com/posts");
   dataJson = data.json();
   console.log(dataJson);
}