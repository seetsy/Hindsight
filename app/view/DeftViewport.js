Ext.define('Hindsight.view.DeftViewport', {
    extend: 'Ext.container.Viewport',
    layout: 'fit',
    requires: ['Hindsight.view.AdvertisingView'],
    initComponent: function() {

        this.items = {

                xtype: 'advertisingView',
                id: 'bodyContainer',
                cls: 'hbox'


        };
        console.log("Hindsight.view.DeftViewport initComponent()");
        this.callParent();

    }

});
