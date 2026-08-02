const accountID = 14453;
let accountEmail = "test@gmail.com";
/*
prefer not to use var because of functional scope
*/
var accountPassword = "Aqw2345@3";
accountCity = "Jaipur"; // correct but not recommended
let accountState; // value is not defined --> undefined

console.log(accountID);
console.log(accountEmail);

// Instead of using console.log every time, we can use console.table([]) to get all data in tabular form
console.table([accountID, accountEmail, accountPassword, accountCity, accountState]);

// Note --> It is not necessary to use ; at the end of the complete code
