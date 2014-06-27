Ext.define('Hindsight.view.ProtoViewport', {
    extend: 'Ext.container.Viewport',



    requires: [
        'Hindsight.view.screens.ProtoScreen'
    ],
    //loadMask: false,
    initComponent: function() {
        console.log(this);
        this.callParent();

    },
    items: [
        {
            xtype:'protoScreen'

        }
    ]

});
