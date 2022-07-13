// To do that, we can use the if statement and the conditional operator ?, that’s also called a “question mark” operator.

// let year =prompt("enter age ",22);
// if(year==22){
//     alert("rigjt")
//     alert("nice goode")
// }

// The if statement may contain an optional “else” block. It executes when the condition is falsy.


// let age =prompt("enter age ");
// if(age >18){
//     alert("valid for voteing ")
// }else{
//     alert("under age ")
// }

// Sometimes, we’d like to test several variants of a condition. The else if clause lets us do that.

let MYage =prompt("enter age ");
if(MYage >18){
    alert("valid for voteing ")
}else if (MYage >100){
    alert("what a age ")
}else{
    alert('under age ')
}


let age=30;
let con =age>20 ? true:false
console.log(con);
alert(con)

