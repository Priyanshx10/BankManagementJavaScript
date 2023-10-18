let obj = { a: 1 }

function addTwo(obj) {
    obj.a = 2;
    return obj;
}

obj = addTwo(obj);
console.log(obj.a); 
