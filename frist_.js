// sum of three
//var can be used insted of let
let a=12  
let b=23
let c=54
let d=BigInt("23445")
let e=Symbol("this is symbol")
console.log(a+b+c)

// concatenation of string's
let str="hello, "
let str1="world "
let str2="!!!!"
console.log(str+str1+str2)

// typeof operator
let p ="string"
let q = 12 //integer
console.log(typeof(p))   //output string
console.log(typeof(q))   // output number


//assigned values can be changed
let x=12    // assignedd as a intger
console.log(x)
x="harsh"   // x changed from integer to string
console.log(x)


// primitive data type :-
// string
// symbol
// number
// NULL
// BIGINT
// boolean
// undefined

// non-primitive are called object 
const item= {
    "harsh": true,
    "adarsh":true,
    "someone":false,
    "ramesh":false,
    "gopi":69,
    "dish":1500,
}
// how to use object variable
console.log("object variable:-")
console.log(item["harsh"])
console.log(item["gopi"])
console.log(item["adarsh"])
console.log(item["dish"])

const is_it_metal={
    "iron":true,
    "gold":true,
    "silver":true,
    "oxygen":false,
    "money":false,
}
console.log(is_it_metal)


//------------------------------------------------------------

let stri ="hello"
let num =12
console.log(stri+" "+num)
console.log(typeof(stri))


// ---------------------------------------------------------------

// artimatic operator
// + - * / %
// ** = exponential (a^b)
// ++ = increment
// -- = decrement

a=10;  // previously declared
b=2;  // previously declared
c=2;
d=2;
e=2;

console.log("a + b = ",a + b)
console.log("a - b = ",a - b)
console.log("a / b = ",a / b)
console.log("a * b = ",a * b)
console.log("a ** b = ",a ** b)  //a^b

console.log("b++ = ",b++) // printed 2 and then increment
console.log("c-- = ",c--) // printed 2 and then decrement
console.log("++d = ",++d) // printed incremented value first
console.log("--e = ",--e) // printed decremented value first

//--------------------------------------------------------------

// assignment operator
// +=, -=, *=, /=, **=
let ass1=2;
console.log(ass1+=5)
console.log(ass1-=5)
console.log(ass1*=5)
console.log(ass1/=5)
console.log(ass1**=5)  //x**y=

//---------------------------------------------------------------

// comparision operator
// ==, !=, === (equal value and type), !== (not equal value or not equal type), <, >, <=, >=, ?(ternery operator)
let com1=12;
let com2=7;
console.log(com1>com2)
console.log(com1<com2)
console.log(com1==com2)
console.log(com1!=com2)
console.log(com1===com2)
console.log(com1!==com2)


