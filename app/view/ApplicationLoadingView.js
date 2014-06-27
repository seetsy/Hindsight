Ext.define('Hindsight.view.ApplicationLoadingView', {
    extend: 'Ext.container.Container',
    layout: 'fit',
    alias: 'widget.applicationloadingview',


    initComponent: function() {

        this.items = {
            xtype: 'container',
            id: 'bodyLoadingContainer',
            items: [
                {
                    id: 'bodyLoadingContainerBox',
                    cls: 'dropShadow',
                    xtype: 'container',
                    layout: 'fit',

                    items:[
                        {
                            xtype:'image',
                            src: '/hindsight/images/44-1.gif',
                            width: 128,
                            height: 128
                        }
                    ]
                }
            ]

        };
        this.callParent();

    }

});
