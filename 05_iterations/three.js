const arr=[1,2,3,4,5]
for(const num of arr){
    console.log(num)
}

const greetings = "Hello World!"
for(greet of greetings){
if(greet === " ")
continue
    console.log(`Each char is: ${greet}`);
}

/*Maps: *key, value pair
        *uniques keys
        *maintains order in which these key value pairs 
are inserted
*/
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
console.log(map);
//for of loop on map
for (const [key, value] of map) {
    console.log(key, ':-', value);
}