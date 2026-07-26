//An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
/*Avoid polluting the global namespace: Because our app
lication could include many functions and global variab
les from different source files, it's important to limi
t the number of global variables. If we have some initi
ation code that we don't need to use again, we could us
e the IIFE pattern.*/
//many times we have problem with global scope pollution, so to avoid that we use IIFE. 
//**at the end of the IIFE a semicolon is necessary**
//named IIFE
(function chai(){
    console.log(`DB CONNECTED`);
})(); //DB CONNECTED
//unnamed IIFE / arrow function

(() => {
    console.log(`DB TWO CONNECTED`);
})(); //DB TWO CONNECTED
//IIFE with arguments and parameter

((name) => {
    console.log(`DB CONNECTED TO ${name}`);
})("hitesh"); //DB CONNECTED TO hitesh