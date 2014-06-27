Ext.define('Hindsight.view.ControlBar', {
    extend: 'Ext.Container',
    alias: 'widget.controlbar',
    requires: ['Hindsight.view.TopNav'],

    cls: 'hbox',
    controller: 'Hindsight.controller.TopNavCtrl',
    inject: {
        store: 'topNavItemsStore'
    },
    items: [{
        xtype: 'container',
        id: 'logoType',
        html: '<img src="images/hindsight-logo.png" " title="Hindsight Analytics" alt="Hindsight Analytics" />'


    }, {
        xtype: 'topnav',
        id: 'topNavigation'
    }]

});