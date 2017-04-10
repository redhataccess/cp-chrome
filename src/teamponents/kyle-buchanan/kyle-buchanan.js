Polymer({

    is: 'kyle-buchanan',

    ready: function () {
        console.log('kyle is ready');
    },

    created: function () {
        console.log('kyle is created');
    },

    properties: {
        pendingAssetCount: {
            type: Number,
            value: Infinity,
            observer: 'onReadyCallback',
        },
    },

});
