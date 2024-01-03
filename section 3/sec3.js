
//----> Operators (function call in infix notation )
// var a = 3+4;
// console.log(a);


// -----> OPerator precedence and associativity

//higher prcedence operator function execute first
// for operator with higher precedence need to check the associativity
// 1) 
// var a = 3 + 4 * 5;(multiplication has higher precedence so first( 4*5 ) performed then (3+20) )
// console.log(a);

// 2) same associativity
// var a = 2, b = 3, c = 4;
// a = b = c;

// console.log(a);
// console.log(b);
// console.log(c);

//3) parentheses change the order of execution
// var a = (3 + 4) * 5;
// console.log(a);

// Operator Precedence and Associativity Table
// : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence


// ----> coercion (converting a value from one type to another) 
//  var a = 1 + '2';
//("one is converted into string")
// console.log(a);


// var a = "hello" + " world";
// console.log(a);



// ------>  Comparison operator
//  1)
// console.log(3 < 2 < 1);
//  2)
// associativity (l-to -r) so(3<2 gives => false) and ( false < 1 => false is converted into number so 0 < 1  that is true )
// console.log(3 < 2 < 1);

// undefined never convert into number
// console.log(Number(undefined));
// null convert into number and its value is 0
// console.log(Number(null));

//----> Equality
// It gives true for different type of same value 
// console.log("3"  == 3);
// console.log("4" == 3);
// console.log(false == 0);
// console.log("false" == 0);
// console.log(null == 0);
// console.log(Number(null));
// console.log(null < 1);
// console.log("" == undefined);
// console.log("" == false);
// console.log("" == 0);
// console.log(0 == false);

// ----> Strict equality
// It required same type of value

// console.log( 3 === 3);
// console.log( "3" === "3");
// console.log("3" === 3);

// var a = 0;
// var b = false;

// if (a === b) {
//     console.log("they are equal");
// }
// else{
//     console.log("they are not equal");
// }

// Equality Comparisons Table
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness


// ---->Existance and Booleans
//  a = 0,null,undefined,""  => gives result nothing
// var a = 0;
// if (a) {
//     console.log("Something is there");
// }

// var a = hi;
// if (a) {
//     console.log("Something is there");
// }

// var a = 0;
// if (a||a === 0) {
//     console.log("Something is there");
// }

// var a ;
// if (a) {
//     console.log("Something is there");
// }


// -----> Default values

// console.log(undefined || "hello");
// console.log(null || "hello");
// console.log("" || "hellow");
// console.log(0 || "hellow");

function greet(name) {
    name = name || '<something>';
    console.log("hello " +  name);
}

greet("khushi");
