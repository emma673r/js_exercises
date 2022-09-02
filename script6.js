"use strict"

let object = {
    firstName: "Peter",
    age: 43,
    student: false
}

// slide 4

console.log(`${object.firstName} is ${object.age}`);

// let name = object.firstName;
// object.firstName = "Bob";

// slide 5

console.log(`${object["firstName"]} is ${object["age"]}.`);

let name = object["firstName"];
object["firstName"] = "Bob";

// slide 6

let person1 = {
    firstName: "Peter",
    age:43,
    student : false
}

console.log(person1.lastName);
person1.lastName = "Tolstrup";
console.log(person1.lastName);

// slide 7

person1.lastName = undefined;

console.log(`person1.lastName is :`, person1.lastName);
console.log(`person1.middleName is :`, person1.middleName);

// slide 8
delete person1.lastName;

// slide 10

console.log(person1);
person1.age++;
console.log(person1);

// slide 11

// const person2 = {
//     firstName : "Bob",
//     age:34,
//     student: true
// }


// console.log(`person1 = person2 ${person1 = person2}`);

// slide 12

const person2 = person1;
person2.firstName = "Bob";
console.log(person1.firstName);

// slide 17

const student1 = {
    firstName : "Harry",
    lastName: "Potter"
}

// const student2 = student1;

// if (student1 === student2) {
//     console.log("They are the same");
// } else {
//     console.log("They are not the same");
// }

const student2 = {
  firstName: "Harry",
  lastName: "Potter",
};

if (student1 === student2) {
  console.log("They are the same");
} else {
  console.log("They are not the same");
}

// slide 19

student1.firstName = student2.firstName;
student1.lastName = student2.lastName;

// slide 20

// * Comparing with == or ===

// * are they similar ? False
// * are they alike ? False
// * are they identical ? False
// * are they the same object ? True