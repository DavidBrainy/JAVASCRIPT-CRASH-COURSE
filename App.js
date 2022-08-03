// Declaering a variable

var firstName = "David";
let lastName = "Brainy";

let age = 27;
let isMarried = true;
let children = ["Bright", "Simon", "Patrick"];

let other = {
     favoritecolor: "Gold",
     favoritesport: "Soccer",
     favoriteFriut: "Apple",
};

const fullName = firstName +" "+ lastName;

const mySelf = `My name is ${firstName} ${lastName}.`; 

console.log(mySelf);

// STRINGS

let sentence = "This is a story of a lady who decided to study coding";

console.log(sentence.length)

console.log(sentence.split(" "))

console.log(sentence.split("lady"))

console.log(sentence.replace("lady", "guy"))

console.log(sentence.toLowerCase())
console.log(sentence.toUpperCase())

console.log(sentence.startsWith("T"))
console.log(sentence.endsWith("coding"))

console.log(sentence.includes("who"))
console.log(sentence.includes("HGJahjgh"))


// ARRAY

let days = ["Monday", "Tuesday", "Wednesday", "Thursday"];
console.log(days.length)

days.push("Friday");
console.log(days);

console.log(days.pop())

days.unshift("Sunday")
console.log(days)

console.log(days.shift())

console.log(days.indexOf("Wednesday"))
console.log(days.indexOf("Friday"))

console.log(days[4]) //retrieving data

days[4] = "Sunday"; //Changing data in the array 

console.log(days);

// OBJECTS

let person = {
    firstName: "David",
    lastName: "Brainy",
    age : 27,
};

console.log(person["firstName"])

console.log(Object.keys(person))
console.log(Object.values(person))

console.log(Object.entries(person))



