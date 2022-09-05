const nameString = `Albus Percival Wulfric Brian Dumbledore`;

let firstName;
let middleName;
let lastName;

let indexOfFirst;
let indexOfLast;

function getNameParts(fullname) {
  indexOfFirst = fullname.indexOf(` `);
  indexOfLast = fullname.lastIndexOf(` `);

  firstName = fullname.substring(0, indexOfFirst);
  middleName = fullname.substring(indexOfFirst, indexOfLast);
  lastName = fullname.substring(indexOfLast);

  firstName = firstName.trim();
  middleName = middleName.trim();
  lastName = lastName.trim();

  if (middleName == "") {
    middleName = null;
  }
  let fullName = `${firstName} ${middleName} ${lastName}`;

  console.log(firstName);
  console.log(middleName);
  console.log(lastName);
  console.log(fullName);
}

getNameParts(`emma pasquer`);
