Ext.define('Hindsight.model.PeriodSummary', {
    extend: 'Ext.data.Model',
    fields: [
        {name:'name', type:'String'},
        {name:'periodType', type:'string', defaultValue: 'day'},
        {name:'startDate', type:'date'},
        {name:'endDate', type:'date'},

        {name:'visits', type:'int'},
        {name:'pageViews', type:'int'},
        {name:'pagesPerVisit', type:'float'},
        {name:'bounceRate', type:'float'},
        {name:'avgTimeOnSite', type:'float'},
        {name:'conversions', type:'int'},
        {name:'commissions', type:'float'},
        {name:'conversionRate', type:'float'}

    ],
    hasMany: {model: 'Hindsight.model.PeriodMetrics', name: 'metrics'}
});