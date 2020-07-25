/*const raining = true;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");*/

/* const temperature = -1;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");*/

//isCitizen is evaluating to true in the conditional statement
/*const isCitizen = true;
const age = 28
if (isCitizen && age > 18) {
  console.log(Vote!);
}*/

//Example of Logical NOT operator
let raining = true;
if (!raining) {
  console.log("Leave your umbrella at home!");
}

const whichSchool = function (age) {
  if (age < 13) {
    return 'Elementary School'
  } else if (age >= 13 && age <= 18){
    return 'Secondary School'
  } else {
    return 'Lighthouse Labs'; }
}

console.log(whichSchool(14));

/*let x = 1
while (x <= 20) {
   if (x % 3 === 0){
  console.log ('Julia');
  } else if (x % 5 === 0){
  console.log('James');
  } else if (x % 3 === 0 && x % 5 === 0){
  console.log ('JuliaJames'); 
} else {console.log(x)} x++;}*/

/*JuliaJames
let x = 1
while (x <= 20) {
  if (x % 3 === 0 && x % 5 === 0) {
      console.log("JuliaJames");
  }else if (x % 5 === 0) {
      console.log("James");
  }else if (x % 3 === 0) {
      console.log("Julia");
  }
  else {
      console.log(x);
  }
  // increment x at the end of each loop
  x = x + 1 ; 
}

/*let num = 99 
while (num >= 0 ) {
  if (num > 2) {
    console.log(num + ' bottles of juice on the wall! ' + num + ' bottles of juice! Take one down, pass it around... ' + (num-1) + ' bottles of juice on the wall!');
  } else if (num === 2) {
    console.log(num + ' bottles of juice on the wall! ' + num + ' bottles of juice! Take one down, pass it around... ' + (num-1) + ' bottle of juice on the wall!');
  } else if (num === 1) {
    console.log(num + ' bottle of juice on the wall! ' + num + ' bottle of juice! Take one down, pass it around... ' + (num-1) + ' bottles of juice on the wall!');
  } else {console.log('No bottles to pass around!');
  }; num--;
} */

// Countdown, lift-off!
/*let seconds = 60;
while (seconds >= 0) {
  if (seconds === 50) {
    console.log ('Orbiter transfers from ground to internal power');
  } else if (seconds === 31) {
    console.log('Ground launch sequencer is go for auto sequence start');
  } else if (seconds === 16) {
    console.log('Activate launch pad sound suppression system');
  } else if (seconds === 10) {
    console.log('Activate main engine hydrogen burnoff system');
  } else if (seconds === 6) {
    console.log('Solid rocket ignition and liftoff!')
  } else {console.log('T-' + seconds + ' seconds');
  } seconds--;  
}

for (var u = 0; u < 5; u = u + 1) {
  for (var y = 0; y < 3; y = y + 1) {
    console.log(u + "," + y);
  }
}


for (let x = 9; x >= 1 ; x--) {
  console.log('hello ' + x);
}

//Factorials
let solution = 1

for (let i = 1; i <= 12; i++) {
    solution *= i;
}
console.log(solution);
*/

//Find my seat exercise
for (let i = 0; i <= 25 ; i++) {
  for (let j = 0; j <= 99 ; j++) {
    console.log(i + '-' + j);
  }
}

