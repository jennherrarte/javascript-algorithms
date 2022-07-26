- to-do - cover scope
// how array sorting works under the hood
// various methods built into JS
// fetch + structuring api requests
// chaining
// async await 

### **eval()**
- expects one argument 
- if you pass value other than a  string, it returns that value
- if you pass a string, it attemps to parse the  string as JavaScript code, throwing a syntax error if it fails
- if it successfully parses the string, then it evaluates the code and returns the value of the  last expression or  statement in the string or undefined if the last expression / statement had no value

```
eval('3 + 2') // => 5
```
<hr>

### **conditional operator (?:)**
- conditional operator is the only ternary operator 
- first operand is evaluated and interpretated as a boolean
- if value of first operand is truthy, then second operand is evaulated and its value returned
- otherwise, if first operand is falsy, then the  third operand is evaluated and its value returned
```js
x > 0 ? x : -x
```
<hr>

### **JS Statements**
- expressions are evaluated to produce a value, but statements are executed to make something happen
- Conditionals - statements like if and switch that make the JS interpreter execute or skip other  statements depending on value of  an expression
- Loops - statements like while and for that execute other statements repetitively
- Jumps -  statements like break, return, and throw that cause the interpreter  to jump to another part of the program

<hr>

### **Switch Expressions**
- The switch expression is evaluated once
- The value of the expression is compared with the values of each case
- If there is a match, the associated block of code is executed
- If there is no match, the default code block is executed

```
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```
```js

// The getDay() method returns the weekday as a number between 0 and 6.

// (Sunday=0, Monday=1, Tuesday=2 ..)

// This example uses the weekday number to calculate the weekday name:

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}


```
<hr>

### **Loops**
- JS has 5 looping statements
  - while
  - do/while
  - for
  - for/of (and its for/await await)
  - for/in

<hr>

### **While Loops**
```
while(expression)
statement
```

- interpreter executes the statement repeatedly ***while*** the ***expression** is truthy 
- an infinite loop can be created using ***while(true)***

<hr>

### **Do/While Loops**
- the do/while loop is like a while loop, except that the loop expression is tested at the bottom of the loop rather than at the top 
- this means the body of the loop is always executed at least once
- do loop requires both the **do** keyword (to mark the beginning of the loop condition)
- do loop requires the **while** keyword (to mark the end and introduce the loop condition)
- do loop must  always be terminated with a semicolon
```
do
statement
while(expression)
```
```js
function printArray(a) {
  let len = a.length, i = 0;
  if(len === 0) {
    console.log('empty array');
  } else {
    do {
      console.log(a[i]);
    } while(++i < len)
  }
}
```
<hr>

### What are the possible ways to create objects in JavaScript

   There are many ways to create objects in javascript as below

   1. **Object constructor:**

      The simplest way to create an empty object is using the Object constructor. Currently this approach is not recommended.

      ```javascript
      var object = new Object();
      ```

   2. **Object's create method:**

      The create method of Object creates a new object by passing the prototype object as a parameter

      ```javascript
      var object = Object.create(null);
      ```

   3. **Object literal syntax:**

      The object literal syntax (or object initializer), is a comma-separated set of name-value pairs wrapped in curly braces.

      ```javascript
      var object = {
           name: "Sudheer"
           age: 34
      };

      Object literal property values can be of any data type, including array, function, and nested object.
      ```

      **Note:** This is an easiest way to create an object

   4. **Function constructor:**

      Create any function and apply the new operator to create object instances,

      ```javascript
      function Person(name) {
        this.name = name;
        this.age = 21;
      }
      var object = new Person("Sudheer");
      ```

   5. **Function constructor with prototype:**

      This is similar to function constructor but it uses prototype for their properties and methods,

      ```javascript
      function Person() {}
      Person.prototype.name = "Sudheer";
      var object = new Person();
      ```

      This is equivalent to an instance created with an object create method with a function prototype and then call that function with an instance and parameters as arguments.

      ```javascript
      function func {};

      new func(x, y, z);
      ```

      **(OR)**

      ```javascript
      // Create a new instance using function prototype.
      var newInstance = Object.create(func.prototype)

      // Call the function
      var result = func.call(newInstance, x, y, z),

      // If the result is a non-null object then use it otherwise just use the new instance.
      console.log(result && typeof result === 'object' ? result : newInstance);
      ```

   6. **ES6 Class syntax:**

      ES6 introduces class feature to create the objects

      ```javascript
      class Person {
        constructor(name) {
          this.name = name;
        }
      }

      var object = new Person("Sudheer");
      ```

   7. **Singleton pattern:**

      A Singleton is an object which can only be instantiated one time. Repeated calls to its constructor return the same instance and this way one can ensure that they don't accidentally create multiple instances.

      ```javascript
      var object = new (function () {
        this.name = "Sudheer";
      })();
      ```
<hr>

### What is a prototype chain

   **Prototype chaining** is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language.

   The prototype on object instance is available through **Object.getPrototypeOf(object)** or \***\*proto\*\*** property whereas prototype on constructors function is available through **Object.prototype**.

   ![screenshot of prototypechain](/javascript-notes/javascript-notes-screenshots/prototype.png)

<hr>

### What is the difference between Call, Apply and Bind

   The difference between Call, Apply and Bind can be explained with below examples,

   **Call:** The call() method invokes a function with a given `this` value and arguments provided one by one

   ```javascript
   var employee1 = { firstName: "John", lastName: "Rodson" };
   var employee2 = { firstName: "Jimmy", lastName: "Baily" };

   function invite(greeting1, greeting2) {
     console.log(
       greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
     );
   }

   invite.call(employee1, "Hello", "How are you?"); // Hello John Rodson, How are you?
   invite.call(employee2, "Hello", "How are you?"); // Hello Jimmy Baily, How are you?
   ```

   **Apply:** Invokes the function with a given `this` value and allows you to pass in arguments as an array

   ```javascript
   var employee1 = { firstName: "John", lastName: "Rodson" };
   var employee2 = { firstName: "Jimmy", lastName: "Baily" };

   function invite(greeting1, greeting2) {
     console.log(
       greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
     );
   }

   invite.apply(employee1, ["Hello", "How are you?"]); // Hello John Rodson, How are you?
   invite.apply(employee2, ["Hello", "How are you?"]); // Hello Jimmy Baily, How are you?
   ```

   **bind:** returns a new function, allowing you to pass any number of arguments

   ```javascript
   var employee1 = { firstName: "John", lastName: "Rodson" };
   var employee2 = { firstName: "Jimmy", lastName: "Baily" };

   function invite(greeting1, greeting2) {
     console.log(
       greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
     );
   }

   var inviteEmployee1 = invite.bind(employee1);
   var inviteEmployee2 = invite.bind(employee2);
   inviteEmployee1("Hello", "How are you?"); // Hello John Rodson, How are you?
   inviteEmployee2("Hello", "How are you?"); // Hello Jimmy Baily, How are you?
   ```

   Call and apply are pretty interchangeable. Both execute the current function immediately. You need to decide whether it’s easier to send in an array or a comma separated list of arguments. You can remember by treating Call is for **comma** (separated list) and Apply is for **Array**.

   Whereas Bind creates a new function that will have `this` set to the first parameter passed to bind().

<hr>

### What is JSON and its common operations

   **JSON** is a text-based data format following JavaScript object syntax, which was popularized by `Douglas Crockford`. It is useful when you want to transmit data across a network and it is basically just a text file with an extension of .json, and a MIME type of application/json

   **Parsing:** Converting a string to a native object

   ```javascript
   JSON.parse(text);
   ```

   **Stringification:** converting a native object to a string so it can be transmitted across the network

   ```javascript
   JSON.stringify(object);
  ```
<hr>

 ### What is the purpose of the array slice method

   The **slice()** method returns the selected elements in an array as a new array object. It selects the elements starting at the given start argument, and ends at the given optional end argument without including the last element. If you omit the second argument then it selects till the end.

   Some of the examples of this method are,

   ```javascript
   let arrayIntegers = [1, 2, 3, 4, 5];
   let arrayIntegers1 = arrayIntegers.slice(0, 2); // returns [1,2]
   let arrayIntegers2 = arrayIntegers.slice(2, 3); // returns [3]
   let arrayIntegers3 = arrayIntegers.slice(4); //returns [5]
   ```

   **Note:** Slice method won't mutate the original array but it returns the subset as a new array.

   ### Variables in JavaScript 

  **Var**
    - var  is  functionally or globally scoped
    - can be redeclated
    - can be  declared without intialization 
    - can be updated

  **Let**
    - let is block  scoped
    - cannot be re-declared within its scope
    - can be declared without initialization
    - can be updated

  **Const**
    - const is block scoped
    - cannot be re-declared within its scope
    - must be initialized at the time of declaration
    - can never be updated
   <hr>

  ### JS Array Methods
  - the most frequently used array methods in JS are: map, filter, find, reduce, and forEach
  # The map array method
  - ***map*** creates a new copy of the original array
  - we use it when we want to do something with the elements of the original array but don't want to change it
  - ***map*** iterates over the original array and takes a callback function as an argument
  - in the callback function, we tell it what to do with the elements

    ```js
    const a = [1,2,3,4,5]

    // Create a new array which multiplies every element by 2

    const d = a.map(function(item){ return item*2 })

    console.log(d) // [2,4,6,8,10]
    ```

    # The filter array method

    filter creates a new array with elements that meet the given condition(s).
    ```js
    // Return the words with more than 6 letters
    const words = ['react', 'script', 'interview', 'style', 'javascript']

    const ans = words.filter((word) => word.length > 6)

    console.log(ans) // ['interview', 'javascript']
    ```

  # The forEach array method
  - forEach is very similar to map but has two key differences:
    - map returns a new Array, but forEach doesn't
    - you can do method chaining in map but not in forEach
    - note: map and forEach don't mutate (change) the original array

### Functional Programming in JavaScript

- You can make function in two ways: 

``` js
function a(){
 console.log('I am a normal function');
 }
 
const b = () => {
console.log('I am an arrow function')
}

// They are essentially the same but with a few differences which we will cover as we go along this tutorial. 

// We can pass variables as arguments

const c = (name) => {
console.log(`My name is ${name}`)
}

// `` template literal are a new addition to the language. Very useful for string formatting. Values are accessed using ${} inside them.

// We can even pass functions as arguments to a function. Will see more on this when we try to understand closures.

const greet = () =>  {
    const prefix = 'Mr'
    return (name) => {
        console.log(`${prefix} ${name}, welcome!`)
    }
}

console.log(greet()('Jack'))
```

### Function Scope in JavaScript
- Scope determines from where the variables are accessible
- There are three types of scope:
  - Global (declaration outside of any function) (var)
  - Function (declaration inside a function)
  - Block (declaration inside a block) (let / const)

### Closures 
- a function bundled together with its lexical environment forms a closure.
- lexical environment is essentially the surrounding state – the local memory along with the lexical environment of its parent

```js
function x() {
  var a = 7
  function y() {
    console.log(a)
  }
  return y
}

var z = x()
console.log(z) // [Function: y]
z()
```

- When x is invoked, y is returned
- Now, y is waiting to be executed
- when we finally invoke z, y is invoked
- Now, y has to log a so it first tries to find 🔍 it in the local memory but it's not there - It goes to its parent function and finds a there - this is closure 
- ***even when functions are returned (in the above case y) they still remember their lexical scope (where it came from***

- **Advantages of Closures in JavaScript**
- Currying

```js
let add = function (x) {
  return function (y) {
    console.log(x + y)
  }
}

let addByTwo = add(2)
addByTwo(3)

// basically passing in 2 and 3 as arguments
```

- **Data Hiding/Encapsulation**
  - if you want to create a counter application but you don't want to expore the variable outside the function when you call it to increase it  by 1  

```js
function Counter() {
  var count = 0
  this.incrementCount = function () {
    count++
    console.log(count)
  }
}

console.log(count) // Error: count is not defined
var adder = new Counter()
adder.incrementCount() // 1
```
-  **Disadvantages of Closures in JavaScript**
  - overconsumption of memory or memory leaks can happen
  -  ***For example - the closed-over-variable will not be garbage collected. This is because, even if the outer function has run, the returned inner function still has a reference to the closed-over-variable.***
  - **Note**: Garbage collection basically removes unused variables from the memory automatically.
