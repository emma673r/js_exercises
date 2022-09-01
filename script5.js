// slide 4

// set up a counter
let counter;

function init() {
  counter = 0;
  loop();
}

function loop() {
  // increment the counter
  console.log(counter);
  counter++;
  // checks the counter
  if (counter < 10) {
    loop();
  }
}

// ** can be delayed wit setTimeout, user interactions, requestAnimationFrame or other events ,, requires two functions : init and loop, remember to call the loop twice : first time and in loop, requires a global let to keep track of count

// slide 5

// sets up a counter
counter = 0;

// checks counter
while (counter < 10) {
  console.log(counter);
  // increments the counter
  counter++;
}

// ** in shile loop you must increment inside the while loop, immediate, can't be delayed, doesnt require a function

// slide 9

// * for the the rescue

// sets up counter, checks counter and increments counter all in one
for (let counter = 0; counter < 10; counter++) {
  console.log(counter);
}

// ! a bit complicated because :
// ! first action : let counter = 0;
// ! second action : counter < 10 ;
// ! third action : console.log(counter);
// ! fourth action : counter++;

// * basically : The code is executed after the check but before the increment


console.log(`after the loop, counter is ${counter}`);
// console.log = 10
