// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Roxel', 'Lala'];
// var groupB = ['RR', 'Clarisse'];
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function greet(name, age) {
  console.log("Hi " + name + ", you are " + age);
}

greet(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Andrew', ...names];
final.forEach(function (f) {
  console.log("Hi " + f);
});
