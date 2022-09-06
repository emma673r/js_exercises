const name = `emma`;

function capitalize (str) {
str = name[0].toUpperCase() + name.substring(1).toLowerCase();
return str;
}

const str = capitalize();

console.log(str);