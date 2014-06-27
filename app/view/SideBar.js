Ext.define('Hindsight.view.SideBar', {
    extend: 'Ext.Container',
    alias: 'widget.sidebar',
    //plugins: ['msgbus'],
    requires: ['Hindsight.view.SideNav'],
    //id: 'sideBarContainer',
    width: 234,

    controller: 'Hindsight.controller.SideNavCtrl',
    items: [{
        xtype: 'sidenav'

    }],
    initComponent: function(){
        //var plugin=this.getPlugin('msgbus');
        //console.log(plugin);
        this.callParent();
    }
});