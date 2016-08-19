Polymer({

    is: 'cp-head',

    ready: function () {
        console.log('cp-head ready');
        var assets = this.querySelectorAll('link[href][type="text/css"]');
        this.set('pendingAssetCount', assets.length);
    },

    created: function () {
        console.log('cp-head created');
    },

    properties: {
        pendingAssetCount: {
            type: Number,
            value: Infinity,
            observer: 'onReadyCallback',
        },
    },

    assetDone: function (evt) {
        var newCount = this.get('pendingAssetCount') - 1;
        this.set('pendingAssetCount', Math.max(0, newCount));
        console.log('cp-sandwich asset loaded: ', (evt.target.href || evt.target.src).replace(/.*\//, ''), this.get('pendingAssetCount'), 'remaining');
    },

    onReadyCallback: function () {},

    onReady: function (cb) {
        console.log('cp-head onReady');
        this.onReadyCallback = cb;
    },

    copyChildrenToHead: function () {
        console.log('cp-head injecting head elements');
        while (this.children.length) {
            document.head.appendChild(this.children[0]);
        }
    }

});
