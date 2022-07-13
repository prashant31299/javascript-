// There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing).

const e = require("express");

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