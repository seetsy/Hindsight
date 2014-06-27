Ext.define('Hindsight.controller.AppCtrl', {
    extend: 'Ext.app.Controller',
    //extend: 'Deft.mvc.ViewController',
    inject: ['brandedApplicationName', 'currentSite'],
    init: function() {
        this.callParent();
    },
    onLaunch: function() {
        this.currentSite.set('name', 'SomeSite.org');
        this.callParent();

    }

});