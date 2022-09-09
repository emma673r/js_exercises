// a predecate (an is-function)

function isVowel(letter) {
  if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u" || letter == "y") {
    return true;
  } else {
    return false;
  }
}

// example

const animals = [
  {
    name: "Mandu",
    type: "cat",
  },
  {
    name: "Mia",
    type: "cat",
  },
  {
    name: "Leeloo",
    type: "dog",
  },
  {
    name: "Scooby",
    type: "dog",
  },
];

function isCat(animal) {
  if (animal.type === "cat") {
    return true;
  } else {
    return false;
  }
}

// * .filter

function all(animal) {
  return true;
}

function none(animal) {
  return false;
}

console.log(animals.filter(all));
console.log(animals.filter(none));


const onlyCats = animals.filter (isCat);

console.log(onlyCats);

function isDog(animal) {
  if (animal.type === "dog") {
    return true;
  } else {
    return false;
  }
};

const onlyDogs = animals.filter(isDog);

console.log(onlyDogs);


// experiment -- map()


const map = animals.map(isCat)

console.log(map);