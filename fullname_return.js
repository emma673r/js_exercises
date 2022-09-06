function getFullName(lastName, firstName, middleName) {
  // if (middleName) {
  //   return `${firstName} ${middleName} ${lastName}`;
  // }
  // return `${firstName} ${lastName}`

  // or

  if (!middleName) {
    return `${firstName} ${lastName}`;
  }
  return `${firstName} ${middleName} ${lastName}`;
}

let result = getFullName("potter", "harry", "james", "ihfg");
console.log(result);
// or
console.log(getFullName("potter", "harry", "james", "ihfg"));
