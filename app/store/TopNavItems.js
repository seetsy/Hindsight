Ext.define('Hindsight.store.TopNavItems', {
    extend: 'Ext.data.Store',
    inject: ['viewManager'],
    requires: ['Hindsight.model.TopNavItem','Hindsight.managers.ModuleManager'],
    model: 'Hindsight.model.TopNavItem',
    config: {
        data:[]
    },
    constructor: function(config) {
        this.data = [
            {href:'/hindsight/#/' + Hindsight.managers.ModuleManager.INSIGHT_MODULE, label:"Insights", viewName:Hindsight.managers.ModuleManager.INSIGHT_MODULE},
            {href:'/hindsight/#/' + Hindsight.managers.ModuleManager.SITES_MODULE, label:"Sites", viewName:Hindsight.managers.ModuleManager.SITES_MODULE},
            {href:'/hindsight/#/' + Hindsight.managers.ModuleManager.IMPORT_MODULE, label:"Import Data", viewName:Hindsight.managers.ModuleManager.IMPORT_MODULE}


        ];
        this.callParent(config);

    }

});

