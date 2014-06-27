Ext.define('Hindsight.view.InsightViewStack', {
    extend: 'Ext.Container',
    alias: 'widget.insightViewStack',
    inject: ['viewManager'],
    //controller: 'Hindsight.controller.AppViewStackCtrl',
    id: 'insightViewStackContainer',
    requires: [
        'Hindsight.view.screens.insight.Overview',
        'Hindsight.view.screens.insight.AdvertisingView',
        'Hindsight.view.screens.insight.TrafficSourcesView'

    ],
    layout: {
        type: 'card'
    },
    flex:1,
    config: {
        currentView:''
    },
    initComponent: function(config){
        //console.log("***** viewManager.currentViewStack:");
        //console.log(this.viewManager.getCurrentViewStack());

        this.viewManager.setCurrentViewStack(this);

        //console.log("***** viewManager.currentViewStack:");
        //console.log(this.viewManager.getCurrentViewStack());

        this.callParent(config);
        console.log("insightViewStack.initComponent...");

    },
    loadView: function(view) {
        this.setCurrentView(view);
        this.getLayout().setActiveItem(view);
    },
    items: [

        {
            xtype: 'insightOverview'
        },
        {
            xtype: 'insightAdvertisingView'
        },
        {
            xtype: 'insightTrafficSourcesView'
        }/*,
        {
            xtype: 'contentView'
        }*/



        /*{
            xtype:'label',
            text:'hello insights'
        }*/
    ]


}, function(){
    //console.log("AppViewStack.onCreation...");

    //
});