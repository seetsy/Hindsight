Ext.define('Hindsight.view.modules.HomeModule', {
    extend: 'Ext.container.Container',
    alias: 'widget.homeModule',
    id:'homeModule',
    cls: 'moduleView',
    //controller: 'Hindsight.controller.HomeModuleCtrl',

    constructor: function(){
        this.callParent();
        //console.log("HomeModule.constructor");
    },
    initComponent: function() {
        this.callParent(arguments);
        //console.log("HomeModule.initComponent");
    },
    items: [
        {
            xtype:'container',
            html: 'Home Module Content Area...'
        }
    ]


});