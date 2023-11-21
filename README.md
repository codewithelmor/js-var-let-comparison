# js-var-let-comparison

In JavaScript, **var** and **let** are both used for variable declaration, but they have some differences in terms of scope and hoisting.

1. **Scope**

* Variables declared with **var** are function-scoped. This means that they are only visible within the function where they are declared. If a variable is declared inside a block (such as an if statement or a loop), it is still accessible outside of that block.
* Variables declared with **let** are block-scoped. This means that they are only accessible within the block where they are defined, which could be a smaller scope than a function.

Example with **var**:

```js
function exampleVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10, because 'var' is function-scoped
}
```

Example with **let**:

```js
function exampleLet() {
  if (true) {
    let y = 20;
  }
  console.log(y); // ReferenceError: y is not defined, because 'let' is block-scoped
}
```

2. **Hoisting**

* Variables declared with **var** are hoisted to the top of their scope during the compilation phase. This means that you can use a variable before it's declared in the code, but the value will be **undefined**.
* Variables declared with **let** are also hoisted, but they are not initialized. Accessing a **let** variable before its declaration results in a **ReferenceError**.

Example with **var**:

```js
console.log(a); // undefined, because of hoisting
var a = 5;
```

Example with **let**:

```js
console.log(b); // ReferenceError: b is not defined
let b = 10;
```

In modern JavaScript, it's generally recommended to use **let** and **const** instead of **var** due to the more predictable scoping behavior. **const** is used for variables that should not be reassigned, and **let** is used for variables that can be reassigned. Using **let** and **const** helps to avoid unexpected behavior and makes your code more maintainable.