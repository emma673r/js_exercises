// slide 3

function greeting(firstName) {
    return `Hello ${firstName}`;
}

let result = greeting("Peter");
// console.log(result);

// slide 4

// 1 - WTF? same as before ? whtas the meaning
greeting("Peter");

// 2 
console.log(greeting("Peter"));
// returns whats expected 

// 3
console.log(greeting());
// returns undefined

// 4
const txt = `Greeting is ${greeting("Peter")}`
console.log(txt);
// function is value of returned value

// 5
// --cant do it ?