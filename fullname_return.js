function getFullName(lastName, firstName, middleName) {

  let fullName = [firstName, middleName, lastName];

  if (middleName === undefined ) {
    fullName = [firstName, lastName];
  }

  fullName = fullName.join(" ");

  return fullName;
}

let result = getFullName("potter", "harry", "james", "ihfg");

console.log(result);