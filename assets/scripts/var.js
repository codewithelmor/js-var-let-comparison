(function () {

    function exampleVar() {
        if (true) {
          var x = 10;
        }
        console.log(x); // 10, because 'var' is function-scoped
    }
    
    exampleVar();    

})();