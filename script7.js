"use strict";

// document.addEventListener("DOMContentLoaded", start);

// const HTML = {};

// function start() {
//   HTML.list = document.querySelector("#list");
//   HTML.dest = document.querySelector("#list tbody");
//   HTML.template = document.querySelector("#template#animal");
// }

// let hex = "#c0ffee";

let r = 192;
let g = 255;
let b = 238;

let h = 164;
let s = 100;
let l = 88;

//* instead of up there, combine them in objects:

let hex = "#c0ffee";

const rgb = {
  r: 192,
  g: 255,
  b: 238,
};

const hsl = {
  r: 192,
  g: 255,
  b: 238,
};

// slide 10
// you can even combine them in a single object

const color = {
  hex: "#c0ffee",

  rgb: {
    r: 192,
    g: 255,
    b: 238,
  },

  hsl: {
    r: 192,
    g: 255,
    b: 238,
  },
};

// slide 11
let red = color.rgb.r;
console.log(`Red is: ${red}`);

// slide 14
//* dealing with json data

//! you get this :

let json = [
  {
    fullname: "Mandu the amazing cat",
    age: 9,
  },
  {
    fullname: "Mia the black cat",
    age: 9,
  },
  {
    fullname: "Leeloo the growing dog",
    age: 1,
  },
  {
    fullname: "Toothless the trained dragon",
    age: 14,
  },
];

// * But this would be better :

let betterJson = [
  {
    name: "Mandu",
    type: "cat",
    desc: "amazing",
    age: 9,
  },
  {
    name: "Mia",
    type: "cat",
    desc: "black",
    age: 9,
  },
  {
    name: "Leeloo",
    type: "dog",
    desc: "growing",
    age: 1,
  },
  {
    name: "Toothless",
    type: "dragon",
    desc: "trained",
    age: 14,
  },
];

// slide 15

// * So you can make a prototype -- is a template basically
// ? Prototype names use PascalCase

const Animal = {
  name: "",
  type: "unknown",
  desc: "",
  age: 0,
};

// use default values for some properties

// slide 16
// * creating objects from prototypes

// ? to create an object from a template you do this

const animal = Object.create(Animal);

// !NOTE: objects use camelCase, protoypes use PascalCase !! CONVENTION

animal.name = "name";
animal.type = "type";
animal.desc = "desc";

// slide 17

Animal.image = "image.jpg";

console.log(animal.image);

// slide 19
// prepareData

function prepareData(jsonData) {
  // forEach jsonObject in jsonData:
  // - read the properties from the jsonObject
  // - convert them into variables we want
  // - create new object from prototype
  // - set properties on that object to the variables
  // - add the objec to an array of data objects
}
