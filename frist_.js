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
    "dish":1500
}
// how to use object variable
console.log("object variable:-")
console.log(item["harsh"])
console.log(item["gopi"])
console.log(item["adarsh"])
console.log(item["dish"])


//------------------------------------------------------------

let stri ="hello"
let num =12
console.log(stri+" "+num)
console.log(typeof(stri))

const dict={
    iron:"metal in the chemistry table",
    gold:"one of the rarest metal",
    silver:"second rarest metal",
    oxygen:"required to live or survive",
    money:"most necessary to live and survive"
}
