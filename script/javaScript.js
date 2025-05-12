// console.log("Hello World");

const name = "sundous"; // const is used for constants, which cannot be reassigned
let name1 = "sundous"; // let is used for variables that can be reassigned
var name2 = "sundous"; // var is used for variables that can be reassigned

const age = 20; // number
let isOld = true; // boolean values can be true or false
let student; // undefined, which means the variable has been declared but not assigned a value
let school = null; // null, which means the variable has been declared and assigned a value of null
let object = { name: "Sun", age: 40 }; // object, which is a collection of key-value pairs
let array = [1, 2, 3, 4]; // array, which is a collection of values

// // console.log(name, ":", typeof name); // string
// // console.log(age, ":", typeof age); // number
// // console.log(isOld, ":", typeof isOld); // boolean
// // console.log(student, ":", typeof student); // undefined
// // console.log(school, ":", typeof school); // null object
// // console.log(object, ":", typeof object); // object
// // console.log(array, ":", typeof array); // object

// let x = 4; // number
// let y = 2; // number
// // console.log(4 + 2); //
// // console.log((x += y)); // x = x + y = 4 + 2 = 6
// // console.log((x -= y)); // x = x - y = 6 - 2 = 4
// // console.log((x += 1)); // x = x + 1 = 4 + 1 = 5

// // console.log(4 / 2); // 2
// // console.log(4 % 2); // 0
// // console.log(4 ** 2); // 4^2 = 4x4 = 16

// // console.log("A" + 4); // A4
// // console.log("A" - 4); // NaN : Not a Number

function printmessage() {
  // console.log("Hello I am a printmessage function");

  let a = 4; // number
  let b = 2; // number

  let result = sum(a, b); // call the function sum and assign the result to the variable result
  // console.log("sum result:", result); // print the result of the function sum
}

// printmessage(); // call the function to execute it

function sum(x, y) {
  // console.log("x:", x); // print the value of x
  // console.log("y:", y); // print the value of y

  let sum = x + y;
  return sum; // return the value of the function
}

// call HTML elements in js
// const menuButton = document.querySelector("#menu");
const menuButton = document.querySelector("header button:first-of-type");
const closeNavButton = document.querySelector("header nav > button");
const navBar = document.querySelector("header nav");

function showMenu() {
  navBar.classList.add("navIsOpen");
}

function closeMenu() {
  navBar.classList.remove("navIsOpen");
}

// elementVariable.addEventListener("eventName", functionName);
menuButton.addEventListener("click", showMenu); // add an event listener to the button
closeNavButton.addEventListener("click", closeMenu); // add an event listener to the button

const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const modeIcon = document.querySelector("#mode img");

// local storage
// localStorage.setItem(key, value); to set a value in local storage
// localStorage.getItem(key); to get a value from local storage
// localStorage.removeItem(key);  to remove a value from local storage

// create boolean variable to check if the mode is dark or light
let isDarkMode = false; // the value is false by default beause the default styles of the website is light mode

function changeMode() {
  body.classList.toggle("darkMode");
  // We need if to check the mode of the body
  if (isDarkMode === true) {
    // light mode
    isDarkMode = false;
    localStorage.setItem("mode", "light");
    modeIcon.src = "./images/moon.svg";
    modeIcon.alt = "moon icon";
  } else {
    // dark mode
    isDarkMode = true;
    localStorage.setItem("mode", "dark");
    modeIcon.src = "./images/sun_icon.svg";
    modeIcon.alt = "sun icon";
  }
}

// check the mode from local storage
function checkSavedMode() {
  const savedMode = localStorage.getItem("mode");
  if (savedMode !== null) {
    // this means that the mode key is exist in the local storage
    if (savedMode === "dark") {
      // dark mode
      isDarkMode = true;
      body.classList.add("darkMode");
      modeIcon.src = "./images/sun_icon.svg";
      modeIcon.alt = "sun icon";
    } else {
      // light mode
      isDarkMode = false;
      body.classList.remove("darkMode");
      modeIcon.src = "./images/moon.svg";
      modeIcon.alt = "moon icon";
    }
  }
}

// this function will be called when the page is loaded to check the mode from local storage
checkSavedMode();

modeButton.addEventListener("click", changeMode); // add an event listener to the button

// ****************************************************
// ****************************************************
// les 11 conditionals statements
// console.log(`is 5 == "5"?`, 5 == "5"); // true, because == checks for value only
// console.log(`is 5 == "A"?`, 5 == "A"); // false, because 5 is not equal to A

// console.log(`is 5 != "5"?`, 5 != "5"); // false, because == checks for value only
// console.log(`is 5 != "A"?`, 5 != "A"); // true, because 5 is not equal to A

// console.log(`is 5 === "5"?`, 5 === "5"); // false, because === checks for value and type
// console.log(`is 5 === "A"?`, 5 === "A"); // false, because 5 is not equal to A

// console.log(`is 5 !== "5"?`, 5 !== "5"); // true, because === checks for value and type
// console.log(`is 5 !== "A"?`, 5 !== "A"); // true, because 5 is not equal to A

// console.log(`is 5 > 4?`, 5 > 4); // true, because 5 is greater than 4

// console.log(`is !5 > 4?`, !5 > 4); // false, because !5 is not greater than 4

// console.log(`is 5 < 4?`, 5 < 4); // false, because 5 is not less than 4

// console.log(`is !5 < 4?`, !5 < 4); // true, because !5 is less than 4

// console.log(`is 5 >= 4?`, 5 >= 4); // true, because 5 is greater than or equal to 4
// console.log(`is 4 <= 4?`, 4 <= 4); // false, because 5 is not less than or equal to 4

// console.log(`is !5 >= 4?`, !5 >= 4); // false, because !5 is not greater than or equal to 4

let years = 17;

if (years > 18) {
  // console.log("#1 the years is:", years);
} else if (years <= 18 && years === 16) {
  // true && false = false
  // console.log("!2 the years is:", years);
} else if (years === 16 || years >= 13) {
  // false || true = true
  // console.log("#3 the years is:", years);
} else {
  // console.log("#4 the years is:", years);
}

// Arrays

let fruits = ["apple", "banana", "orange", "grape", "mango"];

// "apple" has index 0 and it's the first value in the array
// "banana" has index 1 and it's the second value in the array

// console.log("fruits:", fruits);
// get array values from array
// arrayeName[index]
// console.log("get the second value from the array:", fruits[2]); // orange

// console.log(
// `get the index of the value "banana" in the array:`,
// fruits.indexOf("banana")
// ); // get the index of the value in the array
// console.log("get the length of the fruits array:", fruits.length); // get the length of the array

let students = [
  { name: "sundous", age: 20, isOld: false },
  { name: "ahmed", age: 30, isOld: true, result: 100 },
  { name: "ali", age: 25, isOld: false },
];

// console.log("students:", students);

// console.log("students length:", students.length);

// console.log("students value with index 1:", students[1]);
// console.log(
// "get the keys of the object with index 1:",
// Object.keys(students[1])
// ); // get the keys of the object with index 1

let student1 = Object.keys(students[1]); // get the first object from the array
// console.log(" get the length of the object student1:", student1.length); // get the length of the object keys because the student1 is an array of keys

// get object values from array
// arrrayName[index].keyName
// console.log("students:", students[2].name);

let numbers = [1, 2, 3, 4, 5];
// console.log("numbers:", numbers);

numbers.push(100); // add value to the end of the array
// console.log("2 numbers:", numbers);

numbers.pop(); // remove the last value from the array
// console.log("3 numbers:", numbers);

numbers.shift(); // remove the first value from the array
// console.log("4 numbers:", numbers);

numbers.unshift(0); // add value to the beginning of the array
// console.log("5 numbers:", numbers);

numbers.splice(1, 3); // remove 3 values from index 1 to 3
// console.log("6 numbers:", numbers);

numbers.splice(1, 3, 200, 500, 800, 900); // remove 3 values from index 1 to 3 and add 3 values
// console.log("7 numbers:", numbers); // add 3 values from index 1 to 3

let newNumbers = numbers.slice(1, 3); // create a new array from index 1 to 3 without including the last index
// console.log("newNumbers:", newNumbers);

let evenNumbers = numbers.filter((number) => number % 2 === 0); // %: باقي القسمة
// console.log("evenNumbers:", evenNumbers); // [2, 4]

// sum of numbers = 1+2+3+4+5=15
let sumNumbers = numbers.reduce((number, total) => number + total); // total in the first iteration is 0
// console.log("sumNumbers:", sumNumbers); // 15

let findItem = numbers.find((number) => number % 2 === 0);
// console.log("findItem:", findItem); // 2

let hasEvenNumber = numbers.some((number) => number === 5); // return true or fulse value
// console.log("hasEvenNumber:", hasEvenNumber);
