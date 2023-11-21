(function () {

  function exampleVar() {
    console.log(a); // undefined, because of hoisting
    var a = 5;
  }
  exampleVar();

  function exampleLet() {
    console.log(b); // ReferenceError: b is not defined
    let b = 10;
  }
  exampleLet();

})();