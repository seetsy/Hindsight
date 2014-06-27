Ext.define('Hindsight.model.TopNavItem', {
    extend: 'Ext.data.Model',
    fields: ['href', 'label', 'viewName'],

    proxy: {
        type: 'ajax',
        url: 'data/topNavItems.json',
        reader: {
            type: 'json',
            root: 'results'
        }
    }
});
