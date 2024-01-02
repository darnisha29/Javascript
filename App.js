// var a = 'Hello World!';

// function b() {
    
// }


// ----> creation and hosting
// b();
// console.log(a);

// var a = 'Hello World!';

// function b() {
//     console.log('Called b!');
// }
//In Hoisting all veriable is setup and set equal to undefined and function setup as well


//javascript and undefined
// var a;
// console.log(a);

// if (a === undefined) {
//     console.log('a is undefined!');   
// }
// else {
//     console.log('a is defined!');   
// }


//function invocation and execution stack
// function b() {
//     console.log('Called b!');
// }

// b();

// console.log(a);

// var a = 'Hello World!';

// console.log(a);



//function context and variable environment
// function b() {
// 	var myVar;
//     console.log(myVar);
// }

// function a() {
// 	var myVar = 2;
//     console.log(myVar);
// 	b();
// }

// var myVar = 1;
// console.log(myVar);
// a();
// console.log(myVar);




// scop chain
// function a() {
    
//     function b() {
//         console.log(myVar);
//     }
    
// 	b();
// }

// var myVar = 1;
// a();


//Weird JS: We can declare variable as undefined

//Js is runs code line by line
//interpreting it
//compiling it
//executing it

//Javascript is Single Threded Synchronous



//Asynchronous
// long running function
function waitThreeSeconds () {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms) {}
        console. log( 'finished function');
}

function clickHandler() {
    console.log( 'click event!');
}

// listen for the click event
document.addEventListener ('click', clickHandler);
    
waitThreeSeconds();
console.log( 'finished execution');