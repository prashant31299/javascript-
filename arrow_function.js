let add = (a,b) => a+b

console.log(add(3,4))


// if onely one argiment parathesis not require 

let double = n =>n*2;
console.log(double(3));


let age=prompt("enter age ")

let welcome =(age<18)?
    ()=>alert("hellow "):
    ()=>alert("Greetings ");

    welcome()