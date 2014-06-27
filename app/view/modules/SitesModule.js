Ext.define('Hindsight.view.modules.SitesModule', {
    extend: 'Ext.container.Container',
    alias: 'widget.sitesModule',

    controller: 'Hindsight.controller.SitesModuleCtrl',
    html: "Sites Module",
    constructor: function(){
        this.callParent();
    },
    initComponent: function() {
        this.callParent(arguments);
    }



});