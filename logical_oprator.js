// There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing).


// || or 

// true || true is true
// true ||false  is true
// false || true is true
// false || false is false 

if (0|| 1) {
    console.log('true')
}
else{
    console.log('flase');
}


let hour=12;
if (hour <10  || hour > 18){
    console.log('office is open');
}else{
    console.log('office is close');

}

// just pass one more condition 
let isWeekday=true
if (hour < 10 || hour > 18 || isWeekday){
    console.log('office open');
}


// or find first true value 
console.log(1||0);
console.log(null ||0);
console.log(null||1||0);
console.log(null||undefined||0);

// geting true value
let first=""
let last=""
let nick="supercool"
console.log(first||last||nick);


// And oprator In classical programming, AND returns true if both operands are truthy and false otherwise:

// true||true = true
// other vise all false 


let hur=12;
let min=30;

if (hour ==12 && min ==30){
    console.log('time is 12:30');
}
let age =19
if (age >14 && age <90){
    console.log('Inclusiveky');
}
if(!(age >18 && age<90)){
    console.log('exclsusi efe');
}


// adimin login form 
let username = prompt("who are you ")

if(username=='admin'){

     let password=prompt("enter password",'')

     if (password=='themaster'){
        alert('welcome')
     }else if (password ==" "|| password ==null){
        alert('canceled')
     }else{
        alert('wrong password')
     }

}
else if(username == '' || null){
    alert('cancel')
}else{
    alert('i dont know')
}
