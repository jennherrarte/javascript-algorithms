// To-Do
// Cover scope
// How array sorting works  under the hood
// Various methods built into JS
// fetch + structuring api requests
// chaining
// async await 

**eval()**
- expects one argument 
- if you pass value other than a  string, it returns that value
- if you pass a string, it attemps to parse the  string as JavaScript code, throwing a syntax error if it fails
- if it successfully parses the string, then it evaluates the code and returns the value of the  last expression or  statement in the string or undefined if the last expression / statement had no value

```
eval('3 + 2') // => 5
```
**conditional operator (?:)**
- conditional operator is the only ternary operator 
- first operand is evaluated and interpretated as a boolean
- if value of first operand is truthy, then second operand is evaulated and its value returned
- otherwise, if first operand is falsy, then the  third operand is evaluated and its value returned
```js
x > 0 ? x : -x
```
**JS Statements**
- expressions are evaluated to produce a value, but statements are executed to make something happen
- Conditionals - statements like if and switch that make the JS interpreter execute or skip other  statements depending on value of  an expression
- Loops - statements like while and for that executee other statements repetitively
- Jumps -  statementsl ikee break, return, and throw that cause the interpreter  to jump to another part of the program

**Switch Expressions**
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

**Loops**
- JS has 5 looping statements
  - while
  - do/while
  - for
  - for/of (and its for/await await)
  - for/in


**While Loops**
```
while(expression)
statement
```

- interpreter executes the statement repeatedly ***while*** the ***expression** is truthy 
- an infinite loop can be created using ***while(true)***

**Do/While Loops**
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


1. ### What are the possible ways to create objects in JavaScript

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

2. ### What is a prototype chain

   **Prototype chaining** is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language.

   The prototype on object instance is available through **Object.getPrototypeOf(object)** or \***\*proto\*\*** property whereas prototype on constructors function is available through **Object.prototype**.

   ![screenshot of prototypechain](/javascript-notes/javascript-notes-screenshots/prototype.png)

   **[⬆ Back to Top](#table-of-contents)**

3. ### What is the difference between Call, Apply and Bind

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



