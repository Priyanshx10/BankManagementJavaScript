// Implicit Function Binding
const person1 = {
    name: "Priyansh",
    greet: function () {
      console.log(`Hello, I'm ${this.name}.`);
    },
  };
  
  person1.greet(); 
  
  // Explicit Function Binding
  const person2 = {
    name: "Mari",
  };
  
  function greet() {
    console.log(`Hello, I'm ${this.name}.`);
  }
  
  const greetMari = greet.bind(person2);
  greetMari(); 
  
