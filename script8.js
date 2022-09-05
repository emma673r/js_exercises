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
// let lastName = `Pasquer`;
// let myName = "Emma Pasquer";

// sayHello(lastName, firstName);

function sayHello (firstName) {
console.log(`Hello ${firstName}`);
}

// slide 11
// slide 12

// 1 -- runs it anyways - myName is undefined since nowhere did we give it value
// 2 -- myName overwrites firstName
// 3 -- runs function and displays nyName value
// 4 -- displayshello undefined
// 5 --  only displays firstName
// 5 --  only displays lastName

// slide 13

function presentPet(firstName, animalType, animalName) {
console.log(`My name is ${firstName}, I have a ${animalType} called ${animalName}.`);
}

// slide 14

// 1
let firstName = `Emma`;
let animalType;
let animalName;


// presentPet(firstName, animalType, animalName);

// 2
let postCard = "hey";

// presentPet(postCard, postCard, postCard);

// 3

// presentPet(`Emma`,`cat`,`Sika`);

// 4
// presentPet(`Emma`, postCard, animalName);

// 5
// presentPet(postCard, firstName, animalType);
