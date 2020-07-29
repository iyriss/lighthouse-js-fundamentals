/* Voting Station 
const stations = [ ['Big Bear Donair', 10, 'restaurant'],
['Bright Lights Elementary', 50, 'school'],
['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function (stations) {
  const goodStations = [];
  for (const station of stations) {
    const capacity = station [1]
    if (capacity >= 20) {
      const type = station [2]
      if(type === 'school' || type === 'community centre') {
        goodStations.push(station[0]);
      }
    }
  } 
  return goodStations;
}

console.log(chooseStations(stations)); */

// Marks the perfect shot
/*
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

// else if statement
const finalPosition = function (moves) {
  let position = [0,0];
  for(let i = 0; i < moves.length ; i++) {
    if (moves[i] === 'north') {
      position[1] += 1;
    } else if (moves[i] === 'south') {
      position[1] += -1;
    } else if (moves[i] === 'east') {
      position[0] += 1;
    } else if (moves[i] === 'west') {
      position [0] += -1;
    } else {console.log('not valid coordinates')}
  } return position;
}

console.log(finalPosition(moves)); */

// switch statement
/*
const finalPosition = function (moves) {
  let coord = [0,0];
  for(let move of moves) {
    switch (move) {
    case 'north':
      coord[1] += 1;
    break;
    case 'south':
      coord[1] -= 1;
    break;
    case 'east':
      coord[0] += 1;
    break;
    case 'west':
      coord[0] -= 1;
    break;
  default:
    break;
    }
  } return coord;
}

console.log(finalPosition(moves)); 
*/
//Age calculator for app
/*
const ageCalculator = function (name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth;
  let calculation = (name + ' is ' + age + ' years old.');
  return calculation;
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
*/

// Syrup to Mars exercise
//Answer using math floor
/* const howManyHundreds = function (num) {
  let count = num/100;
  count = Math.floor(count);
  return count;
} */

// Answer using modulo operator
/*const howManyHundreds = function (num) {
  let count = (num - (num % 100) / 100);
  return count;
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);*/

// Area calculators exercise

const calculateRectangleArea = function (length, width) {
  let area = length * width;
  if (length < 0 || width < 0) {
    return undefined;
  }
  return area;
}
/*
console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined
*/

const calculateTriangleArea = function (base, height) {
  let area = (base * height) / 2;
  if (base < 0 || height < 0) {
    return undefined;
  }
  return area;
}
/*
console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined
*/

const calculateCircleArea = function (radius) {
  let area = Math.PI * Math.pow(radius, 2) ;
  if (radius < 0) {
    return undefined;
  } return area;
}

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined

