// Given a name string, e.g. “Peter Heronimous Lind” - split the string into three variables: firstName, middleName and lastName.
// indexOf() and substring()

const nameString = `Peter Heronimous Lind`;
const bigNameString = `Albus Percival Wulfric Brian Dumbledore`;

let firstName;
let middleName;
let lastName;

let bigFirstName;
let bigMiddleName;
let bigLastName;

firstName = nameString.split(` `)[0];
middleName = nameString.split(` `)[1];
lastName = nameString.split(` `)[2];

console.log(`firstname is : ${firstName}`);
console.log(`middlename is : ${middleName}`);
console.log(`lastname is : ${lastName}`);

let indexOfFirst;
let indexOfLast;

indexOfFirst = bigNameString.indexOf(` `);
indexOfLast = bigNameString.lastIndexOf(` `);

console.log(`indexOfFirst is ${indexOfFirst}`);
console.log(`indexOfLast is ${indexOfLast}`);

bigFirstName = bigNameString.substring(0, indexOfFirst);
bigMiddleName = bigNameString.substring(indexOfFirst, indexOfLast);
bigLastName = bigNameString.substring(indexOfLast);

console.log(`bigFirstName is : ${bigFirstName}`);
console.log(`bigMiddleName is : ${bigMiddleName}`);
console.log(`bigLastName is : ${bigLastName}`);
