Ext.define('Hindsight.controller.HomeModuleCtrl', {
    extend: 'Deft.mvc.ViewController',
    inject: ['brandedApplicationName'],
    alias: 'controller.homeViewCtrl',

    init: function() {
        console.log("HomeModuleCtrl.init");
        return this.callParent(arguments);

    }


});