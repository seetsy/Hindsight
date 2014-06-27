Ext.define('Hindsight.controller.AppViewStackCtrl', {
    extend: 'Deft.mvc.ViewController',

    inject: {
        adViewCtrl: 'advertisingViewCtrl'
    },
    config: {
        adViewCtrl: null
    },
    constructor: function( config ) {
        //console.log("AppViewStackCtrl.construct");
        this.initConfig( config );

        // this.getStore() will return the injected value.

        return this.callParent( arguments )
    },
    init: function() {
        //console.log("AppViewStackCtrl.init");
        this.callParent();
        //console.log("Hindsight.controller.AppViewStackCtrl init()");
        //var adCtrl = Hindsight.getController('advertisingViewCtrl');
        //console.log(this.adViewCtrl);
    }

});