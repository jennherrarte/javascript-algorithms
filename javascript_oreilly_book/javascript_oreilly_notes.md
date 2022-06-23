// To-Do
// Cover scope
// How array sorting works  under the hood
// Various methods built into JS
// fetch + structuring api requests
// chaining
// async await 
### Chapter 4 - Expressions and  Operators

**4.12.1** eval()
- expects one argument 
- if you pass value other than a  string, it returns that value
- if you pass a string, it attemps to parse the  string as JavaScript code, throwing a syntax error if it fails
- if it successfully parses the string, then it evaluates the code and returns the value of the  last expression or  statement in the string or undefined if the last expression / statement had no value

```
eval('3 + 2') // => 5
```
**4.13.1** conditional operator (?:)
- conditional operator is the only ternary operator 
- first operand is evaluated and interpretated as a boolean
- if value of first operand is truthy, then second operand is evaulated and its value returned
- otherwise, if first operand is falsy, then the  third operand is evaluated and its value returned
```js
x > 0 ? x : -x
```
### Chapter 5 - Statements
- expressions are evaluated to produce a value, but statements are executed to make something happen
- Conditionals - statements like if and switch that make the JS interpreter execute or skip other  statements depending on value of  an expression
- Loops - statements like while and for that executee other statements repetitively
- Jumps -  statementsl ikee break, return, and throw that cause the interpreter  to jump to another part of the program

**5.3.3 Switch**
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

**5.4 Loops**
- JS has 5 looping statements
  - while
  - do/while
  - for
  - for/of (and its for/await await)
  - for/in


**5.4.1 While**
```
while(expression)
statement
```

- interpreter executes the statement repeatedly ***while*** the ***expression** is truthy 
- an infinite loop can be created using ***while(true)***

**5.4.2 Do/While**
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