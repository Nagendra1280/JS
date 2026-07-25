/*
Destructuring is a JavaScript expression that allows us 
to extract data from arrays, objects, and maps and set 
them into new, distinct variables.
*/

const course = {
coursename: "JS in Hindi",
price: "999",
courseInstructor: "hitesh"
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