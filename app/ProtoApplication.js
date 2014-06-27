Ext.define("Hindsight.ProtoApplication", {
    extend: "Ext.app.Application",
    name: "Hindsight",
    requires: [
        'Hindsight.view.ProtoViewport',
        //'Ext.ux.Router'
    ],
    autoCreateViewport: false,
    controllers: [
        //'Hindsight.controller.AppCtrl',
        //'Hindsight.controller.BrowserManagerCtrl'
    ],


    init: function() {

        /**
         * Main IOC Configuration (DeftJS)
         * Application Dependency Injection Objects
         */
        var dateRange = Ext.create('Hindsight.model.DateRange');
        dateRange.set('startDate', new Date());
        dateRange.set('endDate', new Date());
        var site = Ext.create('Hindsight.model.Site');
        site.set('name','MySite.com');
        Deft.Injector.configure({
            brandedApplicationName: {
                value: "Hindsight Analytics"
            },
            dateRange: {
                className: "Hindsight.model.DateRange",
                value: dateRange
            },
            currentSite: {
                className: 'Hindsight.model.Site',
                value: site
            },
            messageBus: {
                className: 'Hindsight.messages.MessageBus'
            },
            periodSummaryStore: {
                className: 'Hindsight.store.PeriodSummaryStore',
                parameters: [{
                    proxy: {
                        type: 'ajax',
                        url: '/hindsight/data/insights/overview.json'

                    }
                }]
            },
            /*getVisitsService: {
                className: 'Hindsight.services.GetVisitsService'
            },*/
            getVisitsCommand: {
                className: 'Hindsight.commands.GetVisitsCommand'
            }
        });

        Ext.create( "Hindsight.view.ProtoViewport" );
    }

});