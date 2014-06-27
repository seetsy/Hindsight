Ext.define('Hindsight.model.PeriodMetrics', {
    extend: 'Ext.data.Model',

    fields: [
        {name:'date', type:'date', dateFormat:"Ymd"},
        {name:'visits', type:'int'},
        {name:'pageViews', type:'int'},
        {name:'pagesPerVisit', type:'float'},
        {name:'bounceRate', type:'float'},
        {name:'avgTimeOnSite', type:'float'},
        {name:'conversions', type:'int'},
        {name:'commissions', type:'float'},
        {name:'conversionRate', type:'float'}

    ],
    belongsTo: 'PeriodSummary'
});