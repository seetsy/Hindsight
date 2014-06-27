Ext.define('Hindsight.view.components.ConversionsSummaryBox', {
    extend:'Ext.view.View',
    alias: 'widget.conversionsSummaryBox',
    inject: {
        store: 'periodSummaryStore'

    },
    cls:'summaryBox',
    initComponent: function(){
        this.itemTpl = Ext.create('Ext.XTemplate',
            '<tpl for=".">',
                '<h4>Affiliate Conversions</h4>',
                '<hr />',
                '<div class="view-wrap">',

                    '<p><b>{conversions}</b> Conversions </p>',
                    '<p><b>{commissions}</b> Commissions</p>',
                    '<p><b>{conversionRate}</b>: Conversion Rate</p>',


                '</div>',
            '</tpl>'
        );
        this.callParent(arguments);
    },
    itemSelector: 'div.view-wrap'

});