Ext.define('Hindsight.view.TopNav', {
    extend:'Ext.view.View',
    alias: 'widget.topnav',

    itemTpl: '<span class="tplWrapper" id="{viewName}"><a href="{href}" class="button"><span>{label}</span></a><span class="vr floatLeft" ></span></span>',
    itemSelector: 'span.tplWrapper',

    loadMask:false,
    inject: {
        store: 'topNavItemsStore'
    },

    constructor: function( config ) {

        return this.callParent( arguments )
    },
    initComponent: function() {
        return this.callParent();
    }

});
