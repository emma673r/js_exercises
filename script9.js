// slide 3

function greeting(firstName) {
  return `Hello ${firstName}`;
}

let result = greeting("Peter");
// console.log(result);

// slide 4

// 1 - same as before
greeting("Peter");

// 2
console.log(greeting("Peter"));
// returns whats expected - no difference

// 3
console.log(greeting());
// returns undefined

// 4
console.log(`Greeting is ${greeting("Peter")}`);
// same as the first 2

// 5
// in the console so not stored anywhere really

// slide 6
// *calling the function makes the return value reset - return value is only equal to last value from last function call

// slide 7
// *to keep a returned value, we need to store it in a variable og use the function call as a parameter to another function

// slide 8
// *a variable equals to its value -- remember

// so this :

// const name = "peter";
// capitalize(name);

// is the same as this :

// capitalize("peter");

// slide 9

// so this

// const firstName = capitalize(name);
// console.log(firstName);

//  is the same as this

// console.log(capitalize(name));

// slide 10

// *you can nest function calls inside one another
// *this creates a capitalized firstName variable form fullName

// let firstName = fullNAme.substring(0,firstSpace);
// firstName = capitalize(firstName);

// slide 11
// *which is the same as this

// const firstName = capitalize(fullName.substring(0, firstSpace));

// slide 12

function humanFactory() {
  const age = Math.floor(Math.random() * 100);
  let salute;
  const isHuman = true;

  if (age < 15) {
    salute = "Yo";
  } else if (age < 40) {
    salute = "Hello";
  } else if (age > 90) {
    salute = "Help I'm dying";
  } else {
    salute = "Hi";
  }

  return { age, salute, isHuman };
}

// console.log("test human is : ", humanFactory());

// * to return multiple values, the best method is to put them into an object and return the object

const realHuman = humanFactory();

console.log(`human : `, realHuman);
