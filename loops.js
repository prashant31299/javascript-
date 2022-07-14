// W//e often need to repeat actions.

// while loop
let i=0
while(i<3){
    console.log(i);
    i++;
}
console.log("loop in negative");
while(i){
    console.log(i);
    i--;
}
// If the loop body has a single statement, we can omit the curly braces {…}:


let j=0;
while(j<3) console.log((j++));


// wdo while loop
let z=0
do{
    console.log("Abc",z);
    z++;
}while(z<5)


// for loop
for(let a=0;a<=10;a++){
    console.log(a,'a');
}

let q=0;
while(q<14) console.log(q++);

let k=0;
for (;k<30;){
    console.log(k++);
}


// breaking the loop 

let sum=0
while(true){
    let value=+prompt("Enter a number ")

    if(!value) break;
    sum+=value;
}
alert('sum' + sum)