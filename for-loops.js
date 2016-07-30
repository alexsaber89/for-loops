//Write a for loop that uses a counter variable initialized at 5
//and then increments it by 10 every time it executes.
//Use console.log() to output the value of the counter variable each time through the loop.
//Stop execution of the loop if the counter variable's value is greater than 120.
console.log("First loop: ");
for (var counter_1 = 5; counter_1 <= 120; counter_1 += 10) {
  console.log("Current value is " + counter_1);
};

//Write a for loop with a counter variable initialized at 4096.
//Each time the loop executes divide the counter variable's value by 2.
//Use console.log() to output its value every time. When the counter variable's value is 1, stop execution.
console.log("Second loop: ");
for (var counter_2 = 4096; counter_2 > 1; counter_2 /= 2) {
  console.log("Current value is " + counter_2);
};

/*
Create an array that contains the names of American Presidents.
Loop over that array with a for loop,
and use string concatenation with console.log() to output the order and name of each President
*/
console.log("Third loop: ");
var presidents = ["George Washington", "John Adams", "Thomas Jefferson", "James Madison"];
for (var counter_3 = 0; counter_3 < presidents.length; counter_3++) {
  console.log("President #" + (counter_3 + 1) + " was " + presidents[counter_3]);
}

/*
Iterate over the object below and use console.log() to output the names of the keys in the object.
*/
console.log("Fourth loop: ");
var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (keyName in antSpecies) {
  console.log("Key name: " + keyName);
}