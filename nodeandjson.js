// Activity 1
let luxton = ['Meep', 'Iris', 'Finn', 'Camee'];
let index = luxton.indexOf('Camee');
console.log(luxton);
// Activity 2
const book = {
    "Title" : "Meep the cat",
    "Description" : "Meep is a cutie",
    "Author" : "Iris",
    "Pages" : 50
}
console.log(book["Title"]);
// Activity 3
function sum (a,b) {
    return a + b
}
console.log(sum(1,2)); 
if (sum (2,4) != 6) {
    console.log("Test fail!")
    } else {
    console.log("Test pass!")
    }
// Activity 7
var prompt = require('prompt-sync')()
var name = prompt('Enter your name:')
console.log("Hello," + name);

