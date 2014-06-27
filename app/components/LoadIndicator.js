Ext.define('Hindsight.components.LoadIndicator', {
    extend: 'Ext.Panel',
    id: 'loadIndicator',
    renderTo: Ext.getBody(),
    html: '<div>Load Indicator Component!</div>',
    initConfig: function() {
        alert("loaded")
    }
});