Ext.define('Hindsight.view.modules.InsightModule', {
    extend: 'Ext.container.Container',
    alias: 'widget.insightModule',
    id:'insightModule',
    cls: 'moduleView',
    controller: 'Hindsight.controller.InsightModuleCtrl',
    requires: [
        'Hindsight.view.InsightSideBar',
        'Hindsight.view.InsightViewStack'

    ],
    constructor: function(){
        //console.log("Hindsight.view.AdvertisingView construct()!!!!");
        this.callParent();
    },
    initComponent: function() {
        console.log("InsightModule.initComponent.");

        this.callParent(arguments);
    },
    items: [
        {
            xtype: 'insightSidebar',
            cls: 'sideBarContainer'
        },
        {
            xtype:'insightViewStack',
            cls: 'subViewContainer'
            /*layout:'card',
            cls: 'subViewContainer',
            items: [
                {
                    xtype:'insightAdvertisingView',
                    html:'Insight ViewStack Default View...'
                },
                {
                    xtype:'insightTrafficSourcesView'
                }
            ]*/
        }

    ]



});