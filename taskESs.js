function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name}, and I'm ${this.age} years old.`);
  };
  
  const JD = new Person("Py10x", 22);
  JD.sayHello();
  