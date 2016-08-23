/**
 * Add support for old chrometwo_require calls.  Push functions to an array and
 * execute those functions later on, once our main bundle has loaded.
 */
(function () {
    console.log('cp-chrome: chrometwo_require back compat support');
    var pending = [];

    function chrometwo_require() {
        console.log('cp-chrome: chrometwo_require adding pending script');
        pending.push(first_fn(arguments));
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
    window.chrometwo_require.done = function c2r_done() {
        console.log('cp-chrome executing pending c2r functions');
        while(window.chrometwo_require.pending.length) {
            window.chrometwo_require.pending.pop()();
        }

        // all libs are loaded now, so future calls to c2r don't need to be
        // pending.  execute them immediately.
        window.chrometwo_require = function () {
            first_fn(aguments)();
        };
    };
})();
