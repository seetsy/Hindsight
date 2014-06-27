Ext.define('Hindsight.view.screens.ProtoScreen', {
    extend: 'Ext.container.Container',
    alias: 'widget.protoScreen',
    inject: [
        'brandedApplicationName'

    ],
    //controller: 'Hindsight.controller.ProtoScreenCtrl',
    requires: [
        'Hindsight.view.components.DatefieldPicker',
        'Hindsight.model.Test',
        'Hindsight.view.components.SiteLabel',
        'Hindsight.view.components.VisitsSummaryBox',
        'Hindsight.view.components.ConversionsSummaryBox',
        'Hindsight.view.components.InsightsControlBar',
        'Hindsight.view.screens.insight.Overview'
    ],
    //width: 250,

    constructor: function(config){
        //this.html = '<p>Hello:' + this.brandedApplicationName + '</p>';
        this.callParent(config);

    },
    initComponent: function() {
        this.callParent(arguments);

    },
    flex:1,
    cls: 'border',
    items: [
        /*{
            xtype:'datefieldPicker',
            id:'dateFieldPicker',
            panelAlignment: 'right'

        },
        {
            xtype: 'label',
            text: "don't move me!"
        }
        {
            xtype:'insightsControlBar',
            id: 'insightsControlBar'
        }*/
        {
            xtype: 'insightOverview',
            id: 'insightOverview'
        }
    ]
})