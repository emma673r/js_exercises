// forEach

const people = [
    "Harry",
    "Hermione",
    "Ron",
    "Neville"
];

function sayHello(person) {
    console.log(`Hello ${person}`);
};

// this

sayHello(people[0]);
sayHello(people[1]);
sayHello(people[2]);
sayHello(people[3]);

// or this

people.forEach(sayHello);

// same thing

// * forEach calls the function given as callback for every item in the array,
// * with that item as a parameter for the callback function

function forEach (callback) {
    callback(array[0]);
    callback(array[1]);
    callback(array[2]);
    // ...
    // until
    callback(array[array.length-1])
}

// the callback function is called with multiple parameters

function testParams(a, b, c, d) {
    console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}`);
}

people.forEach(testParams);

// params contain

// a : currentValue
// b : index 
// c : array
// d: is undefined

// * forEach accepts between 1 and 3 arguments

// 1 : an item from the array
// 2 : the index of that item in the array
// 3 : the entire array


// **** Array methods

// * .forEach
// use each element for something, ex: output to the screen

// * .map
// create a new array, with a new element for each item in the array

// * .filter
// create a new array with just the elements that fit a cetain criteria

// * .sort
// sort the existing array according to some sorting rule we write

// * .find/ .findIndex
// since indexOf doesnt work with objects, we use these instead



// * .reduce
// reduce the entire array to a single value ex calculate the total size of a list of elements, or concatenate strings into a single one

// * .reduceRight
// same as reduce but starts from the end of the array

// * .some
// tells us if at least one of the items in an array fit a ceratin criteria

// * .every
// tells us if all the items in an array fit a certain criteria