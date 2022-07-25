// function x(){
//         var a=20
//     setTimeout(function(){
//             console.log(a);
        
//     },3000)
//     console.log('javascrpt ');
// }
// x()
// using let have a block scope 

// function y(){
//     for(let i=1;i<=5;i++){

//         setTimeout(function(){
//             console.log(i);
//         },i*1000)

//     }
//     console.log(' Namaste  Javasript ');
// }
// y()

// function z(){



// }
// z()

// using var 

// function k(){
//     for (var i=0;i<=5;i++){
//         function close(x){
//             setTimeout(function(){
//                 console.log(x);
//             },x*1000)
//         }
//         close(i)
//     }
//     console.log('Namaste Javascript ');
    
// }
// k()


// function x1(){
//     var a=7;
//    return function y(){
//     console.log(a)
//    } 

// }

// var z=x1()
// console.log(z)
// // z()

function z0(){
    var b=900;
        function z1(){
            var a=7
            function z2(){
                console.log(a,b);
        }
        z2()
        }
        z1()
}
z0()