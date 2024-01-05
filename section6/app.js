// -----> function constructor ,'new'
// function person(firstname,lastname) {

//     console.log(this);
//     this.firstname = firstname,
//     this.lastname = lastname,
//     console.log('this function is invoked');

//     return { greeting: 'i got in the way'};
// }

// var john = new person('john','Doe');
// console.log(john);

// var jane = new person('Jane','Doe');
// console.log(jane);



// -----> function constructors and 'Prototype

// function Person(firstname,lastname) {

//     // console.log(this);
//     this.firstname = firstname,
//     this.lastname = lastname,
//     console.log('this function is invoked')

//     // return { greeting: 'i got in the way'};
// }

// Person.prototype.getFullName = function() {
//     return this.firstname + ' ' + this.lastname;
// }
// Person.prototype.getFormalFullName = function() {
//     return this.lastname + ',' + this.firstname;
// }

// var darnisha = new Person('darnisha','patel');
// console.log(darnisha.getFullName());
// console.log(darnisha.getFormalFullName())



// var john = new Person('john','Doe');
// console.log(john);
// console.log(john.getFullName());

// var jane = new Person('Jane','Doe');
// console.log(jane);

// console.log(john.getFormalFullName());



// function Person(fn,ln){

//     this.fn =fn,
//     this.ln =ln



// }


// Person.prototype.getFullname = function(){
//     return this.fn + ' ' + this.ln;
// }

// var john = new Person('john','doe');
// console.log(john);
// console.log(john.getFullname());


// console.log('auto save')

//  ----> new and function




// -----> Built in function constructors
// String.prototype.isLengthGreaterThan = function(limit) {
//     return this.length > limit;
// }

// console.log("john".isLengthGreaterThan(3));
// var a = new Number(3);
// Number.prototype.isPositive = function() {
//     return  this > 0; 
// }
// console.log(a.isPositive());



// -----> arrays and for in

// Array.prototype.myCustomFeature = 'cool!';
// var arr = ['darnisha','anjali','khushi'];

// for(var prop in arr) {
//     console.log(prop + ': ' + arr[prop]);
// }

// -----> Object.create and pure prototypal Inheritance

// Polyfill
// if(!Object.create) {
//     Object.create = function (o) {
//         if(arguments.length > 1) {
//             throw new Error('Object.create implementation' + 'only accepts the first parameter.');

//         }
//         // console.log("I am the under functon1")
//         function F() {}
//         F.prototype = o;
//         return new F();
//         // console.log("I am the under functon2")
//     };
// }


// var person = {
//     firstname: 'Default',
//     lastname: 'Default',
//     greet: function() {
//         return 'Hi' + this.firstname;
//     }
// }

// var john = Object.create(person);
// john.firstname = 'John';
// john.lastname = 'Doe';
// console.log(john);


// -----> ES6 and Classes

