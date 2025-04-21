console.log("Hello World");

const name = "sundous"; // const is used for constants, which cannot be reassigned
let name1 = "sundous"; // let is used for variables that can be reassigned
var name2 = "sundous"; // var is used for variables that can be reassigned

const age = 20; // number
let isOld = true; // boolean values can be true or false
let student; // undefined, which means the variable has been declared but not assigned a value
let school = null; // null, which means the variable has been declared and assigned a value of null
let object = { name: "Sun", age: 40 }; // object, which is a collection of key-value pairs
let array = [1, 2, 3, 4]; // array, which is a collection of values

// console.log(name, ":", typeof name); // string
// console.log(age, ":", typeof age); // number
// console.log(isOld, ":", typeof isOld); // boolean
// console.log(student, ":", typeof student); // undefined
// console.log(school, ":", typeof school); // null object
// console.log(object, ":", typeof object); // object
// console.log(array, ":", typeof array); // object

// let x = 4; // number
// let y = 2; // number
// console.log(4 + 2); //
// console.log((x += y)); // x = x + y = 4 + 2 = 6
// console.log((x -= y)); // x = x - y = 6 - 2 = 4
// console.log((x += 1)); // x = x + 1 = 4 + 1 = 5

// console.log(4 / 2); // 2
// console.log(4 % 2); // 0
// console.log(4 ** 2); // 4^2 = 4x4 = 16

// console.log("A" + 4); // A4
// console.log("A" - 4); // NaN : Not a Number

function printmessage() {
  console.log("Hello I am a printmessage function");

  let a = 4; // number
  let b = 2; // number

  let result = sum(a, b); // call the function sum and assign the result to the variable result
  console.log("sum result:", result); // print the result of the function sum
}

// printmessage(); // call the function to execute it

function sum(x, y) {
  console.log("x:", x); // print the value of x
  console.log("y:", y); // print the value of y

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

function changeMode() {
  body.classList.toggle("darkMode");
  modeIcon.src = "./images/sun_icon.svg";
  modeIcon.alt = "sun icon";
  // We need if to check the mode of the body
}

modeButton.addEventListener("click", changeMode); // add an event listener to the button
