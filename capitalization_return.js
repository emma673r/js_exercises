function capitalize (str) {
str = str[0].toUpperCase() + str.substring(1).toLowerCase();
return str;
}

const result = capitalize(`emmA`);

console.log(result);