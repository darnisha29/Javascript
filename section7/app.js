//  ----> initialization
// var people = [
//     {
//         firstname: 'darnsha',
//         lastname: 'patel',
//         addresses: [
//             '111 Main St.',
//             '432 Ocean Ave.'
//         ]
//     },
//     {
//         firstname: 'khushi',
//         lastname: 'patel',
//         addresses: [
//             '222 Main St.',
//             '555 Elm Ave.'
//         ],
//         greet: function() {
//             return 'Hello!';
//         }
//     }
// ]

// -----> typeof ,instanceof and figuring out what something is

// var a = 3;
// console.log(typeof a);

// var b = "hello";
// console.log(typeof b);
// var c = {
    
// }
// console.log(typeof c);
// var d = [];
// console.log(typeof d);
// console.log(Object.prototype.toString.call(d));

// function Person(name) {
//     this.name = name;
// }

// var e = new Person('Darnisha');
// console.log(typeof e);
// console.log(e instanceof Person);

// console.log(typeof undefined);
// console.log(typeof null);

// var z = function() {}

// console.log(typeof z);




// ------> strict mode
function logNewPerson(){
    "use strict";


    var person2;
    persom2 = {};
    console.log(persom2);
}

var person;
persom = {};
console.log(persom);
logNewPerson();