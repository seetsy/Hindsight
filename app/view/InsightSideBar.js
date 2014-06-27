Ext.define('Hindsight.view.InsightSideBar', {
    extend: 'Ext.Container',
    alias: 'widget.insightSidebar',
    //plugins: ['msgbus'],
    requires: ['Hindsight.view.menu.InsightSideNav'],
    id: 'sideBarContainer',
    width: 234,
    //html:'InsightSideBar',
    controller: 'Hindsight.controller.menu.InsightSideNavCtrl',
    items: [{
        xtype: 'insightSideNav',
        class: 'sideNav',
        id: 'insightSideNav'

    }],
    initComponent: function(){

        //console.log("InsightSideBar.initComponent...");
        this.callParent();
    }
});