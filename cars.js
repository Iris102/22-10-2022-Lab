// Activity 8
const file = require("./cars.json")
// Print the 1st dealership’s 2nd employee 
console.log(JSON.stringify(file.dealers[0].dealership1.employee[1]));
// Print the 2nd dealership’s 2nd car
console.log(JSON.stringify(file.dealers[1].dealership2.car[1]));