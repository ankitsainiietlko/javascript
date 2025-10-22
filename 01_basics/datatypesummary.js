//refernce(non primitive)
// Array,objects,functions
const id = Symbol('123')
const anotherid = Symbol('123') //symbol never equal
console.log(id == anotherid);

const Myfunction =function(){
    console.log("hello world");
    
}
/* Undefined	=  "undefined"
Null	= "object"
Boolean	= "boolean"
Number	= "number"
String	= "string"
Object (native and does not implement [[Call]]) =	"object"
Object (native or host and does implement [[Call]]) = "function"
Object (host and does not implement [[Call]])    = "undefined", "boolean", "number", or "string".
Implementation-defined except may not be */

//***********************MEMORY*****************

//2 types of memory Stack(in primitive) and Heap(in non primitive)
let u = "Ankit"
let user1 = {
    email: "qw@gmail.com",
    upi: "qwe@ybl"
}
let user2 = user1
user2.email = "555@gmail.com";
console.log(user2.email);
console.log(user1.email);

