//Primitive (call by value)

// 7 types : string, number, BigInt, boolean, null, undefined, symbol

const score = 100;
const scoreval = 100.3
const isloggedin = false
const outsidetemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);

//Reference (Non Primitive)

// Array , Object, function

const heros = ["sofia" , "falcone", "maroni"];
let myobj = {
    name: "harsh",
    age: 22,
}

const myfunction = function(){
    console.log("hello world");
}

console.log(typeof myobj);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// stack (Primitive), Heap (Non Primtive)

let myname = "harshrana"

let anothername = myname
anothername = "chaiorcode"

console.log(myname);
console.log(anothername);

let userone = {
    email: "usergoogle.com",
    upi: "user@ybl"
}
letuserTwo = userone
userTwo.email = "harryrana529@email,com"



console.log(userone.email);
console.log(userTwo.email);