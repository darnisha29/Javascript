
// -----> function programming
// function mapForEach(arr,fn) {
//     var newArr = [];
//     for(var i = 0; i< arr.length; i++) {
//         newArr.push(
//             fn(arr[i])
//         )
//     };
//     return newArr;
// }

// var arr1 =[1,2,3];
// console.log(arr1);

// var arr2 = mapForEach(arr1,function(item) {
//     return item * 2;
// });
// console.log(arr2);

// var arr3 = mapForEach(arr1,function(item) {
//     return item > 1;
// })
// console.log(arr3);
 
// var checkPastLimit = function(limiter,item) {
//     return item > limiter;
// }
// var arr4 = mapForEach(arr1,checkPastLimit.bind(this,1));
// console.log(arr4);

// var checkPastLimitSimplified = function(limiter) {
//     return function(limiter,item) {
//         return item > limiter;
        
//     }.bind(this,limiter);
// };

// var arr5  = mapForEach(arr1,checkPastLimitSimplified(1));
// console.log(arr5);


//-----> prototype
// var person = {
//     firstname: 'Default',
//     lastname: 'Default',
//     getFullName: function() {
//         return this.firstname + ' ' + this.lastname;
//     }
// }

// var  john = {
//     firstname: 'darnisha',
//     lastname: 'patel',
// }

// don't do this Ever! for demo purposes only!!!
// john.__proto__ = person;
// console.log(john.getFullName());
// console.log(john.firstname);

// var jane = {
//     firstname: 'khushi'
// }
// jane.__proto__ =person;
// console.log(jane.getFullName());




// -----> reflection and extend

var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var  john = {
    firstname: 'darnisha',
    lastname: 'patel',
}
john.__proto__ = person;

for( var prop in john) {
    if(john.hasOwnProperty(prop)){
    console.log(prop + ':  '+ john[prop]);
}
}




//----> Everything is object
// var a = {};
// var b =function() {};
// var c = [];

// a.__proto__.__proto__   
// b.__proto__.__proto__  
// c.__proto__.__proto__