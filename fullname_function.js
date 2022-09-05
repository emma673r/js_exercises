// const nameString = `Albus Percival Wulfric Brian Dumbledore`;

let firstName;
let middleName;
let lastName;

// let indexOfFirst;
// let indexOfLast;

// function getNameParts(fullname) {
//   indexOfFirst = fullname.indexOf(` `);
//   indexOfLast = fullname.lastIndexOf(` `);

//   firstName = fullname.substring(0, indexOfFirst);
//   middleName = fullname.substring(indexOfFirst, indexOfLast);
//   lastName = fullname.substring(indexOfLast);

//   firstName = firstName.trim();
//   middleName = middleName.trim();
//   lastName = lastName.trim();

//   let fullName = `${firstName} ${middleName} ${lastName}`;

//   if (middleName == "") {
//     middleName = null;
//     fullName = `${firstName} ${lastName}`;
//   }

//   //   console.log(firstName);
//   //   console.log(middleName);
//   //   console.log(lastName);
//   //   console.log(fullName);
//   getFullName(firstName, lastName, middleName);
// }

// getNameParts(`emma gaga gook pasquer`);



function getFullName(lastName, firstName, middleName) {
  console.log(firstName);
  console.log(middleName);
  console.log(lastName);

  let fullName = [firstName, middleName, lastName];

  if (middleName === undefined ) {
    fullName = [firstName, lastName];
  }
  fullName = fullName.join(" ");
  console.log(fullName);
}

getFullName("potter", "harry", "james", "ihfg");