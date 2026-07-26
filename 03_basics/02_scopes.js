/*Hoisting in JavaScript is the behavior where variable and function 
declarations are moved to the top of their scope (before code execution). 
This means you can sometimes use variables or functions before 
they are actually declared in the code.*/


let a=10;//global scope
const b=20; //var has global scope no matter it is defined inside block or globally
var c=30;//global scope
console.log(a)
console.log(b)
console.log(c)


if(true){
let a = 1
const b = 2
var c = 3
    d =4
    console.log("Inner:", a); //1
    console.log("Inner:", b); //2
    console.log("Inner:", c); //3
    console.log("Inner:", d); //4
}
console.log("Outer:", a); //100
console.log("Outer:", b); //200
console.log("Outer:", c); //3
console.log("Outer:", d); //4



function one(){
    const username="jon"
    function two(){
        const name="snow"
        console.log(username)
    }
    // console.log(name)//error =>website out of scope
    two()
}
one()


if(true){
const username = "hitesh"
if(username === "hitesh"){
const website = " youtube"
        console.log(username + website);
}
//console.log(website); // error =>website out of scope
}
//console.log(username); //error=> username out of scope


//hoisting 

console.log(addOne(5));//6 => correct => function declarations can be hoisted
//function declaration
function addOne(num){
   return num + 1;
}
//console.log(addTwo(5));//error=>function expressions cant be hoisted
//function expression
const addTwo = function(num){
   return num + 2;
}
console.log(addOne(5)); //6
console.log(addTwo(5)); //7