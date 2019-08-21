/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - I think Global, "this" keyword defaults to the window         object when none of the other rules applies unless you are in strict mode       in which case defaults to undefined.

* 2. Implicit Binding - look to the left of the dot when a function is invoke 
     - Think Implicit = Automatic

* 3. New Binding - When using the new keyword makes a new object and this           keyword points to it. 

* 4. Explicit Binding - telling javascript to point to a certain value using        the keyword call.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function person() {
  console.log(this.name);
}
const name = "John";
person();

// Principle 2

// code example for Implicit Binding
let stranger = {
  name: "Lary",
  age: 25,
  location: "Los Angeles",
  greet: "Hello",
  speak: function() {
    console.log(this.greet);
  }
};

stranger.speak(); // invoking the function here

// Principle 3

// code example for New Binding

function person(friend) {
  this.stranger = friend;
}

let myfriend = new person("He is my new friend");

console.log(myfriend.stranger); //function is being invoke

// Principle 4

// code example for Explicit Binding

function anotherPerson() {
  console.log(this.greet);
}

let friend = {
  greet: "How are you"
};

anotherPerson.call(friend); // invoking the function here
