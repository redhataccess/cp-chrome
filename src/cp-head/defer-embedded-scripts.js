/**
 * Add support for old chrometwo_require calls.  Push functions to an array and
 * execute those functions later on, once our main bundle has loaded.
 */
(function () {
    console.log('cp-head chrometwo_require back compat support');
    var pending = [];

    function chrometwo_require() {
        console.log('cp-head chrometwo_require adding pending script');
        pending.push(first_fn(args));
    }

    /**
     * Given an array-like object, find the first element which is a function.
     */
    function first_fn(args) {
        for(var i = 0; i < args.length; ++i) {
            if (typeof args[i] === 'function') {
                return args[i];
            }
        }
    }

    window.chrometwo_require = chrometwo_require;
    window.chrometwo_require.pending = pending;
})();
