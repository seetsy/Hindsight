Ext.define('Hindsight.model.VisitsSummary', {
    //extend: 'Hindsight.model.HindsightModel',
    extend: 'Ext.data.Model',
    fields: [
        {name:'name', type:'string'},
        {name:'visits', type:'int'},
        {name:'pageViews', type:'int'},
        {name:'pagesPerVisit', type:'int'},
        {name:'bounceRate', type:'float'},
        {name:'avgTimeOnSite', type:'float'},
        {name:'conversions', type:'int'},
        {name:'commissions', type:'float'},
        {name:'conversionRate', type:'float'}


    ]
});