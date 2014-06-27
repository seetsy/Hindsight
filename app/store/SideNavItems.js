Ext.define('Hindsight.store.SideNavItems', {
    extend: 'Ext.data.Store',
    requires: ['Hindsight.model.SideNavItem'],
    model: 'Hindsight.model.SideNavItem',
    config: {
        data:[]
    },
    constructor: function(config) {

        this.data = [
            {href:'/hindsight/#/insights/' + Hindsight.managers.ViewManager.INSIGHT_OVERVIEW, label:"Overview", viewName:Hindsight.managers.ViewManager.INSIGHT_OVERVIEW},
            {href:'/hindsight/#/insights/' + Hindsight.managers.ViewManager.ADVERTISING_VIEW, label:"Advertising", viewName:Hindsight.managers.ViewManager.ADVERTISING_VIEW},
            {href:'/hindsight/#/insights/' + Hindsight.managers.ViewManager.TRAFFIC_SOURCES_VIEW, label:"Traffic Sources", viewName:Hindsight.managers.ViewManager.TRAFFIC_SOURCES_VIEW},
            {href:'/hindsight/#/insights/' + Hindsight.managers.ViewManager.CONTENT_VIEW, label:"Content", viewName:Hindsight.managers.ViewManager.CONTENT_VIEW}
        ];
        this.callParent(config);

    }

});

