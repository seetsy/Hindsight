Ext.define('Hindsight.services.GetVisitsService', {
    extend: 'Hindsight.services.HindsightService',
    inject: {
        store:'periodSummaryStore'
    },

    proxy: {
        type: 'ajax',
        url: '/hindsight/data/insights/overview.json',
        reader: {
            type: 'json',
            root: 'result.data.summary'
        }
    }

})