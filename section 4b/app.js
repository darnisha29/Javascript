//-----> Objects,Functions, and this

// this points to global object
// console.log(this);

// function a() {
//     console.log(this);
//     this.newvariable = "hello";
// }

// var b = function() {
//     console.log(this);
// }
// a();
// console.log(newvariable);
// b();

// var c = {
//     name: 'this c object',
//     log: function() {
//         var self = this;
//         self.name = 'updated this object'; 
//         console.log(self); //  this ---> points to c obj

//         var setname = function(newname) {
//             self.name = newname;  // this.name = newname --->points to global obj
//         }
//         setname('updated again the c obj');
//         console.log(self);
//     }
// }

// c.log();
// console.log(this);


// -----> Arrays
// var arr = new Array();
// var arr = [1,2,3];
// var arr = [1,
// false,
// {
//     name: 'Tony',
//     address: '111 main st.'
// },
// function(name) {
//     var greeting = 'Hello  ';
//     console.log(greeting + name);

// },
// "hello"
// ];

// console.log(arr);
// arr[3](arr[2].name)


// ----> Arguments and spread

// function greet(firstname,lastname,language) {

//     language = language || 'guj'; 

//     if (language === "es"){
//         console.log('hola ' + firstname + lastname );
//     }

//     if(language === "en"){
//         console.log('helo ' + firstname + lastname);
//     }

//     if (arguments.length === 0) {
//         console.log('missing parametes!');
//         console.log('----------');
//         return;
//     }

    // console.log(firstname);
    // console.log(lastname);
    // console.log(language);
    // console.log('arg 0: ' + arguments[0]);
    // console.log("-----------");
// }

// greet();
// greet('darnisha','patel','en' );
// greet('khushi','patel','es');
// greet('darnisha','patel','trwer');


// -----> Automatic semicolon insertion
// function info() {
//     return 
//     {
//         name: "khushi"
//     };
// }

// console.log(info());

// -----> immediately invoked function expression

// var greeting = function(name){
//     return 'Hello  ' + name;
// }("khushi");
// console.log(greeting);


// var firstname = 'khushi';
// (function(name) {
//     console.log('helo' + name);
// }(firstname));

     
//   function greeting(whattosay) {
//     return function(name){
//         console.log(whattosay + ' ' + name);
//     }
//   }

//   greeting('Hi')('Khushi');

// function buildfunction() {
//     var arr = [];

//    for(var i=0; i<3; i++){
//     arr.push(
//         function() {
//             console.log(i);
//         }
//     )
   
// }

// return arr;
// }

// var fs = buildfunction();

// fs[0]();
// fs[1]();
// fs[2]();


// function buildfunction2() {
//     var arr = [];
//     for (var i = 0; i<3; i++){
//         arr.push(
//             (function(j) {
//                 return function(){
//                     console.log(j);
//                 }
//                 }(i))
//             )
//             }
//             return arr;
//     }


// var fs2 = buildfunction2();
// fs2[0]();
// fs2[1]();
// fs2[2]();


// ---> function factories
// function greeting(language) {
//     return function(firstname,lastname) {
//         if(language === 'en'){
//             console.log('hello ' + 'firstname ' + 'lastname ');
//         }

//         if(language === 'es'){
//             console.log('hola ' + 'firstname ' + 'lastname ');
//         }
//     }
// }

// var greetenglish = greeting('en');
// var greetspanish = greeting('es');

// greetenglish('darnisha','patel');
// greetspanish('anjali','patel');


//-----> closures and callback

// function tellmewhendone(callback) {
//     var a =2000;
//     var b = 3000;

//     callback();
// }

// tellmewhendone(function(){
//     console.log('I am done');
// })

// tellmewhendone(function(){
//     alert('done!!!');
// })

// ----> call(), apply() and bind()
var person = {
    firstname: 'anna',
    lastname: 'bella',
    getfullname: function(){
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
        }
}
   
 var logName =  function(lang1, lang2) {
    console.log("---------------------");
    console.log('logged: ' + this.getfullname());
    console.log(lang1 + ' ' + lang2);
    console.log("---------------------");
};
var logNamePerson = logName.bind(person);

logNamePerson('es','en');

logName.call(person,'guj  ','hinf');

logName.apply(person,['guj','marathi']);


(function(lang1, lang2) {
    console.log("---------------------");
    console.log('logged: ' + this.getfullname());
    console.log(lang1 + ' ' + lang2);
    console.log("---------------------");
}).apply(person,['gujrati','english']);

// function borrowing
var person2 = {
    firstname: 'Jane',
    lastname: 'Doe',
}

console.log(person.getfullname.apply(person2));

// function currying
function multiply(a,b){
    return a*b;
}

var multipleByTwo = multiply.bind(this,2);
console.log(multipleByTwo(6));

var multipleByThree = multiply.bind(this,3);
console.log(multipleByThree(6));