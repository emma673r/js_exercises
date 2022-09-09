//*  Function Expressions

const person1 = {
  firstName: "Peter",
  age: 29,
  student: false,
};

const person2 = person1;

// is the same

// or

function greeting(firstName) {
  return `Hello ${firstName}`;
}

const sayHi = greeting;

console.log(sayHi("Harry"));

// greeting and say hi both point to the same function

// so therefore those two are the same

sayHi("Harry");
greeting("Harry");

// *Callback functions

//! 2 things to remember

// * a function is like an object - you can have a variable point to a function (reference a function), and caall the function via that variable
// * a function can be called with as few or as many parameters as we like - it might need a specific number to work properly, but we can call it anyways

function congreet(firstName) {
  console.log(`Hello ${"Harry"}`);
}

setTimeout(congreet, 1000, "Ron");
// function to call, delay, parameter to call the function to call with

const person3 = {
  firstName: "Harry",
  lastName: "Potter",
  hired: false,
};

const person4 = {
  firstName: "Ron",
  lastName: "Weasley",
  hired: false,
};

function hire(person) {
  person.hired = true;
}

function fire(person) {
  person.hired = false;
}

// we can call it directly

hire(person4);

// we can also build a function to call any function

function fireOrHire(action, person) {
  action(person);
  console.log(person);
}

fireOrHire(hire, person4);
// calls our fonction, with hire function as action parameter and person4 as person parameter

// scenario

function init() {
  console.log("init");
  // load JSON
  loadJSON("students.json", prepareData);
}

function prepareData(data) {
  console.log("prepareData");
  // Data received from JSON
  console.table(data);

  // TODO : foreach over data, create objects
}

async function loadJSON(url, callback) {
  const response = await fetch(url);
  const jsonData = await response.json();
  callback(jsonData);
}

// * anonymous functions

dialog.closeButton.addEventListener("click", closeDialog);

function closeDialog() {
  dialog.classList.add("close-animation");
  dialog.addEventListener("animationend", dialogClosed);
}

function dialogClosed() {
  dialog.remove();
}

// can be

dialog.closeButton.addEventListener("click", closeDialog);

function closeDialog() {
  dialog.classList.add("close-animation");
  dialog.addEventListener("animationend", function () {
    dialog.remove();
  });
}

// they can still received parameters

students.forEach(function (student) {
  console.log(`name : ${student.firstName}`);
});

// they can aslo return a value

students.forEach(function (student) {
  if (student.house === "Gryffindor") {
    return true;
  } else {
    return false;
  }
});

// * arrow functions

//! same as anonymous functions, just a SIMPLER way of calling them

students.forEach(function (student) {
  console.log(`name : ${student.firstName}`);
});

// becomes

students.forEach((student) => {
  console.log(`name : ${student.firstName}`);
});

// since its a small function (one parameter and one line) you dont need () around param and {} around the line
// so it becomes

students.forEach((student) => console.log(`name : ${student.firstName}`));
