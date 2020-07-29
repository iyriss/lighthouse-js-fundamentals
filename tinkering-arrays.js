/*
const udaciFamily = ['Julia' , 'James', 'Sinai'];
for (let i = 0; i < udaciFamily.length; i++) {
  console.log(udaciFamily[i]);
}



var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

prices [0] = 2
prices [2] = 2
prices [6] = 2

console.log(prices);

const word = "supercalifragilisticexpialidocious";

console.log(word.length);

var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

rainbow.splice(2,1,'Yellow','Green');
rainbow.splice(5,0,'Purple');

console.log(rainbow);

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];

function hasEnoughPlayers (example) {
  if (example.length >= 7) {
    return true;
  } else {
    return false;
  } 
  return example;
}

console.log(hasEnoughPlayers(team));

const crew = ["Mal", "Zoe", "Wash", "Inara", "Jayne", "Kaylee"]
crew.push("Simon","River","Book");

console.log(crew);

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];
donuts[0] += " hole";
donuts[1] += " hole";
donuts[2] += " hole";
*/
// OR we can also do: the variable `i` is used to step through each element in the array
/*for (var i = 0; i < donuts.length; i++) {
    donuts[i] += " hole";
    donuts[i] = donuts[i].toUpperCase();
}

words = ["cat", "in", "hat"];
words.forEach(function(laka, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + laka);
});

var test = [12, 929, 11, 3, 199, 1000];

test.forEach(function(item, index) {
  if (item % 3 === 0) {
    test[index] = item + 100;
  }
})

console.log(test);
*/
//map method
/*
let bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];

let totals = bills.map (function (tips) {
  tips *= 1.15;
  tips = tips.toFixed(2);
  return Number(tips);
});

console.log(totals);
*/

//Nested numbers
var numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];
/*
for (let r = 0; r < numbers.length; r++) {
  for (let c = 0; c < numbers[r].length; c++) {
    if (numbers[r][c] % 2 === 0) {
      console.log('even')
    } else {console.log('odd')}
  }
}*/
/*
for (let r = 0; r < numbers.length; r++) {
  for (let c = 0; c < numbers[r].length; c++) {
    numbers[r][c] % 2 === 0 ? (
      console.log('even')) :
    (console.log('odd'));
  }
} */

const director = "Steven Spielberg";
const films = ["Jaws", "Raiders of the Lost Ark", "A.I."];
films[2] = "Jurassic Park";

films;
console.log(films);