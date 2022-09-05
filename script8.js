// * https://javascript.info/function-basics

// slide 4
function myFunc(param1, param2) {
  // code goes here
}

// slide 5 - parameters #1

// string parameter to alert
// alert(`Do not use alerts for user info!`);

// string parameter to console.log
// console.log(`Js is running`);

// const message = `Js is running`;
// console.log(message);

// slide 6 - parameters #2

// const firstSpace = fullname.indexOf(" ");
// const firstName = fullname.substring(0, firstSpace);

// const firstname = fullname.substring(0, fullname.indexOf(" "));

// slide 7 - parameters #3

// window.addEventListener("DOMContentLoaded", start);
// first param is a string
// second param is a function reference - not a call to a function

// slide 8 - parameters #4
// ffunctions ith a parameter

function displayActors(actorList) {}
function showMoreData(actor) {}
function showActor(oneActor) {}
function showModal(movie) {}

// slide 10

// let firstName = `Emma`;
// let myName = "Johnny";

// sayHello("Johnny");
// sayHello(myName);
// sayHello(myName);
// sayHello();
// sayHello(firstName, "Pasquer");
// sayHello("Pasquer", firstName);

// function sayHello(firstName) {
//   console.log(`Hello ${firstName}`);
// }
// console.log(`Hello ${firstName}`);

// slide 11
// slide 12

// 1 -- Hello ("firstName")
// 2 -- hello myName
// 3 -- logs the myName inside function and firstName outside
// 4 -- displays hello undefined
// 5 --  only the one parameter (as defined in the fucntion) so only display firstName
// 5 --  only first paramter (as the one before)

// slide 13

function presentPet(firstName, animalType, animalName) {
  console.log(`My name is ${firstName}, I have a ${animalType} called ${animalName}.`);
}

// slide 14

// 1
let firstName = `Emma`;
let animalType = `cat`;
let animalName = `Sika`;

presentPet(`Name`, `animal`, `animal Name`);

// will take the value of the given parameters when calling the function

// 2

presentPet(animalName, firstName, animalType);

//* BASICALLY ALWAYS : will take the values of the given parameters when calling the function
