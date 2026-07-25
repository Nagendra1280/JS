/*
Destructuring is a JavaScript expression that allows us 
to extract data from arrays, objects, and maps and set 
them into new, distinct variables.
*/

const course = {
coursename: "JS in Hindi",
price: "999",
courseInstructor: "jon"
}

//Object Destructuring in js
const {courseInstructor} = course
console.log(courseInstructor);//hitesh
const {courseInstructor: instrcutor} = course
console.log(instrcutor);//hitesh


/*
//API: API is apne kaam ko dusre ke sar pe dalna;task d
elegate kr dena
//JSON
{
    "name": "hitesh",
    "email": "some@gmail.com",
    "age": 18,
    "isLoggedIn": false
}
//other format of json data
[
    {},
    {},
    {}
]
//there are other formats of json as well
//use "JSON Formatter" to understand json data
*/

// Normal way
const arr = [10, 20, 30];
const a = arr[0];
const b = arr[1];
const c = arr[2];

console.log(a, b, c); // 10 20 30

// Using destructuring
const [x, y, z] = [10, 20, 30];
console.log(x, y, z); // 10 20 30

//skipping value 
const [first, , third] = [1, 2, 3];
console.log(first, third); // 1 3

//Default value 
const [m = 5, n = 10] = [7];
console.log(m, n); // 7 10

//swaping varible 
let p = 1, q = 2;
[p, q] = [q, p];
console.log(p, q); // 2 1

//Nested array
const [num1, [num2, num3]] = [10, [20, 30]];
console.log(num1, num2, num3); // 10 20 30


//For Objects 
const person = {
  name: "Alice",
  age: 25,
  city: "Bengaluru"
};

// Destructuring
const { name, age } = person;
console.log(name, age); // Alice 25

//Renameing the varible 
const { name: fullName, age: years } = person;
console.log(fullName, years); // Alice 25

//Default values
const { name: FullName, age: year } = person;
console.log(FullName, year); // Alice 25

//Nested Objects
const user = {
  id: 101,
  profile: {
    username: "coder123",
    email: "coder@example.com"
  }
};
const { profile: { username, email } } = user;
console.log(username, email); // coder123 coder@example.com

//Function parameters with destructuring
function greet({ name, city }) {
  console.log(`Hello ${name} from ${city}!`);
}

greet(person); // Hello Alice from Bengaluru!
