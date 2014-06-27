Ext.define('Hindsight.store.PeriodSummaryStore', {

    extend: 'Hindsight.store.HindsightStore',
    model: 'Hindsight.model.PeriodSummary',
    listeners: {
        datachanged: function(store, eOpts){
            /*
            Deft.Injector.configure({

            });
            */
        }
    },
    reader: {
        type: 'json',
        root: 'result.data.summary'// location of records
    }

});

