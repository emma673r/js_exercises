// slide 4
let letters = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`];

let someLetter = letters[4];
console.log(`someLetter is ${someLetter}`);

let anotherLetter = letters[7];
console.log(`anotherLetter is ${anotherLetter}`);

// * good to know
//* first item is index[0] and last is array.length -1

// slide 5 & 6
console.log(letters);

let newArr = letters;
newArr[4] = `*`;

console.log(newArr);

// slide 7

const people = [`Harry`, `Ron`, `Hermione`];

let result;

result = people.push("Draco");

console.log(`result is ${result}`);
console.log(`people is ${people}`);

// slide 8

result = people.pop();

console.log(`result is ${result}`);
console.log(`people is ${people}`);

result = people.push("Neville");

console.log(`result is ${result}`);
console.log(`people is ${people}`);

result = people.push(`Luna`);

console.log(`result is ${result}`);
console.log(`people is ${people}`);

result = people.slice(0,3);

console.log(`result is ${result}`);
console.log(`people is ${people}`);

result = people.splice(1,0, "Cho");

console.log(`result is ${result}`);
console.log(`people is ${people}`);

people[1] = "Ginny";

console.log(`result is ${result}`);
console.log(`people is ${people}`);

result = people.push("Fred", "George");
console.log(`result is ${result}`);
console.log(`people is ${people}`);

result = people.indexOf("Fred");
console.log(`result is ${result}`);
console.log(`people is ${people}`);

result = people.splice(result,1);
console.log(`result is ${result}`);
console.log(`people is ${people}`);


// slide 9

// * push() : add's to end of array
// * pop() : removes last of array
// * slice(x,y) : cuts the array to given indexes
// * splice(x,y, "smthg") : adds smthg in between given indexes
// * indexOf("smthg") : returns index of smthg in the array

// slide 10

// * push() = add - at end (returns new array)
// * pop() = remove - at end (returns removed element)
// * unshift() = add - at start (returns new array)
// * shift() = remove- at start (returns remnoved element)

// slide 13

const newLetters = Array.from(`abcdefghijklmn`);

console.log(`newLetters is ${newLetters}`);

// slide 14

const str = "abcdefghijklmn";

const arr1 = str.split();
const arr2 = Array.from(str);

console.log(`arr1 is ${arr1}`)
console.log(`arr2 is ${arr2}`)

// * difference is :
// * str.split() -> makes array with abcdefghijklmn as one element
// * Array.from(str) -> makes array with each chara as one element

// slide 17

// * arr.toString() -> makes one string of every elements (separated by a comma);
// * arr.split(x,y) -> makes one string of every elements inside of given indexes;