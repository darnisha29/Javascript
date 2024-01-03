
//----> Objects and dot
// var person = new Object();

// person["firstname"] = "darnisha";
// person["lastname"]  = "patel";
// var firstnameProperty = "firstname";

// console.log(person);
// console.log(person[firstnameProperty]);
// console.log(person.firstname);
// console.log(person.lastname);

// person.address = new Object();
// person.address.street = "dddd maain st.";
// person.address.city = "surat";
// person.address.state = "guj";

// console.log(person.address.street);
// console.log(person.address.city);
// console.log(person.address.state);

// ----> Object literals
// var Darnisha = {
//     firstname: 'Darnisha',
//     lastname: 'Patel',
//     address: {
//         street:"111 main st.",
//         city: "surat",
//         state:"guj",
//     }

// };

// function greet(person){
//     console.log('Hi ' + person.firstname);
// }

// greet(Darnisha);
// greet({firstname: 'khushi', lastname: "Patel"});

// // console.log(person);

// Darnisha.address2 = {
//     street: '333 second St. '
// }


// ---> Namespace

// var greet = 'Hello!';
// var greet = " Hola!";

// console.log(greet);

// var english = {};
// var spanish = {};

// english.greet = 'Hello!';
// spanish.greet = "Hola!";

// console.log(english.greet);
// console.log(spanish.greet);


 // ----> JSON and object literals
// var ObjectLiteral = {
//     firstname: 'Mary',
//     isAProgrammer: true
// };

// console.log(JSON.stringify(ObjectLiteral));

// var jsonValue = JSON.parse('{"firstname": "mary","isAprogrammer": true}');
// console.log(jsonValue)


// ----> functions are Objects
// function greet() {
//     console.log('hi');
// }

// greet.language = 'english';
// console.log(greet);  // it show function text
// console.log(greet.language);

// -----> Function statement and function expression
// greet();
// function greet() {
//     console.log('hi');
// }

// var anonymousGreet = function() {
//     console.log("hi");
// }
// anonymousGreet();

// function log(a) {
//     console.log(a);
// }
// log({
//     greeting: 'hi'
//  });


// ----> By value (primitive)
// a = 3;
// b = a;
// a = 2;

// console.log(a);
// console.log(b);

// -----> By Reference(all object(including function))
var a = {greeting: 'hi'};
var b;
b = a;
a.greeting = 'hello';  // mutate

console.log(a);
console.log(b);

// by reference (even as parameters)
function changeGreeting(obj) {
    obj.greeting = 'Hola';
}

changeGreeting(b);
console.log(a);
console.log(b);

//equals operator sets up new memory space (new address)
a = {greeting: 'howdy'};
console.log(a);
console.log(b);