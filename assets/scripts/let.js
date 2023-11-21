(function () {

    function exampleLet() {
        if (true) {
            let y = 20;
        }
        console.log(y); // ReferenceError: y is not defined, because 'let' is block-scoped
    }

    exampleLet();

})();