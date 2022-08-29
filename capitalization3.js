// Given a single name string in an unknown case, e.g. “peter” or “PETER” - create a new string with the same name, where the third letter is uppercase, and the rest is lowercase. I.e. “peTer”.

// Hint: use substring, toUpperCase, toLowerCase and simple string concatenation



const name = `peter`;

const lowerCaseName = name.toLowerCase();

console.log(lowerCaseName);


const firstLetterCapital = name[0].toUpperCase() + name.substring(1);

console.log(firstLetterCapital);


const thirdLetterCapital = name.substring(0,2) +  name[2].toUpperCase() + name.substring(3);

console.log(thirdLetterCapital);