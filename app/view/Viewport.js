Ext.define('Hindsight.view.Viewport', {
    extend: 'Ext.container.Viewport',
    //mixins: ['Deft.mixin.Controllable','Deft.mixin.Injectable' ],
    controller: 'Hindsight.controller.ViewportCtrl',
    layout: 'fit',
    requires: [
        'Hindsight.view.ApplicationLoadingView',
        'Hindsight.view.ControlBar',
        'Hindsight.view.SideBar',
        'Hindsight.view.AppViewStack'
    ],
    //loadMask: false,
    defaults: {autoScroll: true},
    initComponent: function() {
        this.loadingViewitems = {
            id: 'mainLoadingContainer',
            items: [{
                xtype: 'applicationloadingview'
            }]


        };
        this.appViewItems = {
            id: 'mainContainer',
            dockedItems: [{
                dock: 'top',
                xtype: 'controlbar',
                id: 'controlBarContainer'
            }],
            items: [{
                xtype: 'container',
                id: 'bodyContainer',
                cls: 'hbox',
                items: [

                    {

                        xtype: 'appViewStack',
                        id: 'viewStackContainer'

                    }
                ]
            }]
        };
        this.items = this.loadingViewitems;
        this.callParent();

    }

});
