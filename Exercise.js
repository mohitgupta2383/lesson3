let me = {
    name: "Mohit", 
    age: 19, 
    hobbies : ["Sports","Cooking","Travel"], 
    Pets: [{Age:2, Name:"White", Species:"Labra"},{Age:1 , Name :"Kitty", Species : "Cat"}, {Age : 5 , Name: "Bob" , Species : "horse"}]
  
    };
  
  string = "My hobbies are "
  let i = 0
  while (i < me.hobbies.length) {
    string += `${me.hobbies[i]}, `
  i++
  }
  
  console.log(string)