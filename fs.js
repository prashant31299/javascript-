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



function sayhi(){
    alert('hwllow ')
}
let func = sayhi;

// func()
// sayhi();

function ask(question,yes,no) {
    if (confirm(question))yes()
    else no()
}

ask("do you agree ?", showOK,showCancel)

function showOK(){
    alert('you agreed . ');
}

function showCancel(){
    alert("you cancel the execution")
}


