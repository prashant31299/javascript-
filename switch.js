// A switch statement can replace multiple if checks.

// It gives a more descriptive way to compare a value with multiple variants.

let a =10;
switch (a) {
    case 10:
        console.log("monday");
        console.log('go for worl');
        break;

        case 12:
            console.log("wensday ");
            break;
    default:
        console.log('no logs ');
        break;
}

let e =10;
switch (e) {
    case 10:
        console.log("monday");
        console.log('go for worl');
        

        case 12:
            console.log("wensday ");
            // break;
    default:
        console.log('no logs ');
        break;
}