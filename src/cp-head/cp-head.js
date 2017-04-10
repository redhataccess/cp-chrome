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
        // run the callback right away in case all assets have already finished loading
        cb(this.get('pendingAssetCount'));
    },

    copyChildrenToHead: function () {
        console.log('cp-head injecting head elements');
        while (this.children.length) {
            if (this.children[0].nodeName === 'TITLE') {
                this.copyTitleToHead(this.children[0]);
            }
            else {
                this.copyNodeToHead(this.children[0]);
            }
        }
    },

    copyTitleToHead: function (node) {
        console.log('cp-head copying title to head');
        var titleHasProperSuffix = new RegExp(node.textContent+'$').test(document.title);
        if (!titleHasProperSuffix) {
            document.title += ' - ' + node.textContent;
        }
        this.removeChild(node);
    },

    copyNodeToHead: function (node) {
        console.log('cp-head copying ' + node + ' to head');
        document.head.appendChild(node);
    },

});
