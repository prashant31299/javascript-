// // Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

// function showmsg(){
//     console.log("this program executed");
// }
// showmsg()


// // local variable 

// function local(){
//     let msg="hey this is a local var "
//     console.log(msg);
// }
// local()
// // console.log(msg); it will give a error


// // outer vaiable can access from anywhere

// let userName = 'prashant'

// function show(){
//     console.log(userName);
//     let ms='hallpw '
//     console.log(ms + userName );


// }
// console.log(userName);
// show()
// console.log(userName);




// // Parameter



// function addnew(from,and){
//     let ab="* " + from +and;
//     console.log(ab);
// }

// addnew('prasajs','chavan')

// // default mgs

// function def(a,t="value "){
//     console.log(a," ", t);

// }

// def("new val")




// function val(from ,text){
//     text=text || 'not given text';
//     console.log(from , text);
// }

// val('frasg d','ew')


// // return the value 

// function sum(a,b){
//     return a+b
// }

// console.log(sum(4,3));


// // creating parent guranty program 


// // function checkage(age){
// //     if (age>=18){
// //         return (true)
// //     }else{
// //         return confirm("get permision from your parents")
// //     }
// // }


// // let age =prompt("enter your age",18)

// // if(checkage(age)){
// //     alert("access granted")
// // }else{
// //     alert("access denied")
// // }


// function doNoting(){
//     if ( !checkAge(age) ) {
//         return;
//       } 
//       alert( "Showing you the movie" ); // (*)

// }
//  console.log(doNoting());


var x =1;
a();
b()
console.log(x);

function a(){
    var x = 10;
    console.log(x);
}

function b(){
    var x = 100;
    console.log(x);
}