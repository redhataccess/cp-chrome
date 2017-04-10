Polymer({

    is: 'cp-chrome',

    created: function () {
        console.log('cp-chrome created');
        this.injectHead();
    },

    ready: function () {
        console.log('cp-chrome ready');
        this.registerAPI();
    },

    attached: function () {
        console.log('cp-chrome attached');
        this.autoImport();
        require('nimbus/nav').show_nav(); // TODO remove this after menu is componentized
    },

    properties: {
        locale: {
            type: String,
            value: 'en',
            observer: 'handleLangChange',
        },
    },

    handleLangChange: function (lang) {
        console.log('cp-chrome change language to ' + lang);
    },

    registerAPI: function () {
        var self = this;
        window.portal.setLocale = function setLocale(locale) {
            self.set('locale', locale);
        };
    },

    revealGate: function (pendingAssetCount) {
        if (pendingAssetCount <= 0) {
            this.classList.add('assets-loaded');
        }
    },

    injectHead: function () {
        var cp_head = document.createElement('cp-head');
        cp_head.onReady(this.revealGate.bind(this));
        cp_head.copyChildrenToHead();
    },

    autoImport: function () {
        var els = document.querySelectorAll.call(document, portal.elements.names);
        for (var i = 0; i < els.length; ++i) {
            var name = els[i].nodeName.toLowerCase();
            console.log('cp-chrome importing <' + name + '>');
            this.importHref(portal.elements.paths[name]);
        }
    },

});
