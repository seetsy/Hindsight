Ext.define('Hindsight.view.screens.insight.TrafficSourcesView', {
    extend: 'Ext.container.Container',
    alias: 'widget.insightTrafficSourcesView',

    controller: 'Hindsight.controller.insight.TrafficSourcesViewCtrl',
    html: "Traffic Sources View",
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