const accountID=12345
let accountEmail="yashas@gmail.com";
var accountpassword="12434";
// accountID=2; this wont affect the initial accountID

console.log(accountID); 
accountEmail="haha@gmail.com";
accountpassword="23456";

console.table([accountID,accountEmail,accountpassword]); //this is show data in tabular form 

// prefer not t use var because of block scope and functional scope 


