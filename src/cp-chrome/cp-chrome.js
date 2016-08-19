Polymer({

    is: 'cp-chrome',

    created: function () {
        console.log('cp-chrome created');
        this.injectHead();
    },

    ready: function () {
        console.log('cp-chrome ready');
        window.portal = this.envs[this.env];
        this.registerAPI();
    },

    attached: function () {
        console.log('cp-chrome attached');
    },

    properties: {
        env: {
            type: String,
            value: 'prod',
            observer: 'handleEnvChange',
        },
        envMap: {
            type: Object,
        },
        locale: {
            type: String,
            value: 'en',
            observer: 'handleLangChange',
        },
    },

    envs: {
        'prod': {
            host    : 'https://access.redhat.com',
            idp_url : 'https://idp.redhat.com',
            nrid    : '14615289',
            nrlk    : '2a497fa56f',
        },
        'stage': {
            host    : "",
            idp_url : "",
            nrid    : "",
            nrlk    : "",
        },
        'qa': {
            host    : "",
            idp_url : "",
            nrid    : "",
            nrlk    : "",
        },
        'dev': {
            host    : "",
            idp_url : "",
            nrid    : "",
            nrlk    : "",
        },
    },

    handleEnvChange: function (env) {
        console.log('cp-chrome change env to ' + env);
        this.set('envMap', this.envs[env]);
    },

    handleLangChange: function (lang) {
        console.log('cp-chrome change language to ' + lang);
    },

    registerAPI: function () {
        window.portal.setLocale = locale => this.set('locale', locale);
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

});
