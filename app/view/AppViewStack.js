Ext.define('Hindsight.view.AppViewStack', {
    extend: 'Ext.Container',
    alias: 'widget.appViewStack',
    inject: ['moduleManager'],
    controller: 'Hindsight.controller.AppViewStackCtrl',
    id: 'viewStackContainer',
    requires: [
        'Hindsight.view.modules.HomeModule',
        'Hindsight.view.modules.SitesModule',
        'Hindsight.view.modules.ImportConversionsModule',
        'Hindsight.view.modules.InsightModule'
    ],
    layout: {
        type: 'card'
    },
    flex:1,
    config: {
        currentModule:''
    },
    initComponent: function(config){
        //console.log("AppViewStack.initComponent...")
        this.moduleManager.setCurrentModuleContainer(this);
        this.callParent(config);
    },
    loadModule: function(module) {
        //console.log("AppViewStack.loadModule()");
        this.setCurrentModule(module);
        this.getLayout().setActiveItem(module);
    },
    items: [
        {
            xtype: 'homeModule'
        },
        {
            xtype: 'sitesModule'
        },
        {
            xtype: 'importConversionsModule'
        },
        {
            xtype: 'insightModule'
        }
    ]


}, function(){
    //console.log("AppViewStack.onCreation...");

    //
});