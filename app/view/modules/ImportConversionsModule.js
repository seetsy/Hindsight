Ext.define('Hindsight.view.modules.ImportConversionsModule', {
    extend: 'Ext.container.Container',
    alias: 'widget.importConversionsModule',
    id:'importConversionsView',
    cls: 'moduleView',
    controller: 'Hindsight.controller.ImportConversionsModuleCtrl',

    constructor: function(){
        this.callParent();
    },
    initComponent: function() {
        this.callParent(arguments);
    },
    items: [
        {
            xtype:'container',
            html: 'Import Conversions View Content Area...'
        }
    ]

});