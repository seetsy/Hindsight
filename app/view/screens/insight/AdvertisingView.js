Ext.define('Hindsight.view.screens.insight.AdvertisingView', {
    extend: 'Ext.container.Container',
    alias: 'widget.insightAdvertisingView',
    id: "insightsAdvertisingContainer",
    controller: 'Hindsight.controller.insight.AdvertisingViewCtrl',
    html: "Advertising View",
    constructor: function(){
        this.callParent();
    },
    initComponent: function() {

        this.addEvents({
            "onRender" : true
        });
        this.callParent(arguments);
    }


});