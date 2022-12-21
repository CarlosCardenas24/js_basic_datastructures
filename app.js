let ul = document.getElementById("usernames");

//go through the json array and log to the console the zipcode of each user
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => { 
    
    console.log(json) //this line helps your analyze your data structure in the console;
    //https://jsonplaceholder.typicode.com/users this url will also show you the structure;

    //write your code below here
    for(let i = 0; i < json.length; i++){
      let li = document.createElement('li');
      li.append(JSON.stringify(json[i]));
      ul.append(li);
    }
    //write your code above here

  })