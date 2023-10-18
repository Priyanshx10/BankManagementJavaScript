class Person{
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
    
    sayHello(){
        console.log(`Hello ${this.name}`)
    }
}

const py = new Person("Priyansh", 22);
py.sayHello();