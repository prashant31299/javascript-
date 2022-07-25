// let b=120
// {
//     var a=30;
//     let b=20;
//     let c =30
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// console.log(b);



// let a =24;
// function r(){
// //     console.log(a);
// // }
// // r()


// // lexical scope 

// const a=10;
// {
//     const a=20;
//     {
//         const a=30;
//         console.log(a);

//     }
// }

function a1(){
    var z=102;

    function b(){
        var x=20 
        console.log(z);
        function c(){
        }
    }
    b()
    }
    a1()