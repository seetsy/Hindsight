Ext.define('Hindsight.view.screens.insight.Overview', {
    extend: 'Ext.container.Container',
    alias: 'widget.insightOverview',
    inject: ['brandedApplicationName'],
    controller: 'Hindsight.controller.insight.OverviewCtrl',
    id: "insightsOverviewContainer",
    cls: 'viewPadding',
    requires: [
        'Hindsight.model.Test',
        'Hindsight.view.components.SiteLabel',
        'Hindsight.view.components.VisitsSummaryBox',
        'Hindsight.view.components.ConversionsSummaryBox',
        'Hindsight.view.components.InsightsControlBar'
     ],
    config:{
        chartStore:null
    },
    constructor: function(config){
        this.callParent(config);

    },
    initComponent: function() {
        this.callParent(arguments);

    },
    getName: function(){
        return 'testing name';
    },

    items:[
        {
            xtype:'container',
            layout:{
                type:'auto'

            },
            id:'myVbox',
            flex:1,
            items:[
                {
                    xtype:'insightsControlBar',
                    id: 'insightsControlBar'
                },

                {
                    xtype:'container',

                    items: [
                        {
                            xtype:'container',
                            id:"chartContainer",
                            cls: "chartContainer",
                            layout:'fit'
                        }

                    ]
                },
                {
                    xtype:'container',
                    layout: 'auto',
                    items: [
                        {
                            xtype:'visitsSummaryBox',
                            id:'visitsSummaryBox'
                        },
                        {
                            xtype:'conversionsSummaryBox',
                            id:'conversionsSummaryBox',
                            style: 'margin-left:20px;'
                        }
                    ]
                }



            ]
        }


    ]

});