const name = `peter`;


function capitalize (str) {
str = str[0].toUpperCase() + str.substring(1).toLowerCase();
console.log(str);
}

capitalize(name);
capitalize(`emmA`);