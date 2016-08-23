Polymer({

    is: 'cp-sandwich',

    ready: function () {
        console.log('cp-sandwich ready');
    },

    created: function () {
        console.log('cp-sandwich created');
    },

    attached: function () {
        console.log('cp-sandwich attached');
        // this.deferScripts();
    },

    deferScripts: function () {
        console.log('cp-sandwich deferring all scripts');
        var remote_scripts = this.querySelectorAll('script[src]:not([defer])');
        var inline_scripts = this.querySelectorAll('script:not([src])');
        var i;

        // forEach would be prefereable here, but these are indexed for loops
        // only because querySelectorAll returns a NodeList which does not have
        // Array.prototype.
        for (i = 0; i < remote_scripts.length; ++i) {
            // remote_scripts[i].defer = true;
            console.log('cp-sandwich deferred ' + remote_scripts[i].src.replace(/.*\//, ''));
        }
        for (i = 0; i < inline_scripts.length; ++i) {
            var item = inline_scripts[i];
        }
    },

});
