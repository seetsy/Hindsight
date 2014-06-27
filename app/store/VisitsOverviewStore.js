Ext.define('Hindsight.store.VisitsOverviewStore', {
    extend: 'Ext.data.Store',
    model: 'Hindsight.model.VisitsSummary',
    listeners: {
        datachanged: function(store, eOpts){
            /*var user = this.first();
            Deft.Injector.configure({
                user: {
                    value: user
                }
            });*/
        }
    },
   /* proxy: {
        type: 'ajax',
        url: '/hindsight/data/insights/overview.json',
        root: ''
    },*/
    data: [
        {
            name:'Visits Overview',
            visits: 700,
            pageViews: 790,
            pagesPerVisit:2.43,
            bounceRate: 9.42,
            avgTimeOnSite: 2.55,
            conversions:28,
            commissions: 979,
            conversionRate: 4.49
        }
    ]

});

