// slide 6 Java Script 3 pptx

let name = `Peter`;
let animal = `cat`;
let animalName = `Mandu`;

console.log(`My name is ${name}. \nI have a ${animal} called ${animalName}.`);

name = `Emma`;
animalName = "Sika";

console.log(`My name is ${name}. \nI have a ${animal} called ${animalName}.`);


// slide 7

const len = name.length;

console.log(`${name} is ${len} characters long`);

const firstLetterName = name[0];

console.log(`The first letter of ${name} is ${firstLetterName}`);


// slide 8

name = `Albus Percival Wulfric Brian Dumbledore`;
const thirdLetter = name[2];
const seventhLetter = name[6];
const dumbledoreD = name.length-10;
const lastE = name.length-1;

console.log(`The total number of characters is ${len} incluing spaces`);
console.log(`The character at index 2 is ${thirdLetter}`);
console.log(`The character at index 6 is ${seventhLetter}`);
console.log(`The index of the first D in Dumbledore is ${dumbledoreD}`);
console.log(`The index of the last e in Dumbledore is ${lastE}`);

// slide 9

const str1 = " There is   space here \n   ";
const str2 = str1.trim();

console.log(`str1 is : ${str1}`);
console.log(`str2 is : ${str2}`);


// slide 11

const fullName = "Peter Heronimous Lind";
const firstName = fullName.substring(0,5);
// you precise where it starts and where it ends : in this example it starts at 0 and ends at 5 characters.

console.log(`The first name of ${fullName} is :\n${firstName}`);

// slide 12

name = `Albus Percival Wulfric Brian Dumbledore`;

const Albus = name.substring(0,5);
const Dumbledore = name.substring(29);
const Wulfric = name.substring(15,22);
const spaceWulfric = name.substring(14,22);
const ian = name.substring(25,28);
const bus = name.substring(2,5);

console.log(`Albus is ${Albus}`);
console.log(`Dumbledore is ${Dumbledore}`);
console.log(`Wulfric is ${Wulfric}`);
console.log(`spaceWulfric is ${spaceWulfric}`);
console.log(`ian is ${ian}`);
console.log(`bus is ${bus}`);