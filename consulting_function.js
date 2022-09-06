function capitalize(str) {
  return str.substring[0].toUpperCase() + str.substring(1).toLowerCase();
}

function getNameParts(fullName) {
  // firstName
  let firstName = capitalize(fullName.substring(0, fullName.indexOf(" ")));
  //   middleName
  let middleName;
  if (fullName.indexOf(" ") !== fullName.lastIndexOf(" ")) {
    middleName = fullName.substring(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" "));
  }

  const middleNameList = middleName.split(" ");
  console.log(middleNameList);
  if (middleNameList.length > 1) {
    middleNameList.forEach((name, i, arr) => {
      console.log(name);
      arr[i] = capitalize(name);
    });
    middleName = middleNameList.join(" ");
  } else {
    middleName = capitalize(middleName);
  }

  const lastName = capitalize(fullName.substring(fullName.lastIndexOf(" ") + 1));

  return { firstName, middleName, lastName };
}

const fullName = getNameParts("emma bla bleh pasquer");
console.log(fullName);
