Ext.define('Hindsight.view.components.VisitsSummaryBox', {
    extend:'Ext.view.View',
    alias: 'widget.visitsSummaryBox',
    inject: {
        store: 'periodSummaryStore'

    },
    cls:'summaryBox',
    initComponent: function(){

        this.itemTpl = Ext.create('Ext.XTemplate',
            '<tpl for=".">',
                '<h4>{name}</h4>',
                '<hr />',
                '<div class="view-wrap row-fluid">',
                    '<div class="span6">',
                        '<p><b>{visits}</b> Visits </p>',
                        '<p><b>{pageViews}</b> Page Views</p>',
                        '<p><b>{pagesPerVisit}</b>: Pages/Visit</p>',
                    '</div>',
                    '<div class="span6">',
                        '<p><b>{bounceRate}</b> Bounce Rate</p>',
                        '<p><b>{avgTimeOnSite}</b> Avg. Time on Site</p>',

                    '</div>',
                '</div>',
            '</tpl>'
        );
        this.callParent(arguments);

    },
    itemSelector: 'div.view-wrap'

});