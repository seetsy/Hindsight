Ext.define("Hindsight.Application", {
    //extend: "Deft.mvc.Application",
    extend: "Ext.app.Application",
    name: "Hindsight",
    //requires: ["DeftQuickStart.view.Viewport", "DeftQuickStart.store.CompanyStore", "DeftQuickStart.store.CompanyService"],
    requires: [
        'Hindsight.view.Viewport',
        'Ext.ux.Router'
    ],
    autoCreateViewport: false,
    //requires: ['Ext.util.Router'],
    controllers: [
        'Hindsight.controller.AppCtrl',
        'Hindsight.controller.BrowserManagerCtrl'
    ],
    //controller: 'Hindsight.controller.AppCtrl',
    routes: {
        '/:module': 'Hindsight.controller.BrowserManagerCtrl#viewChange',
        '/:module/:view': 'Hindsight.controller.BrowserManagerCtrl#viewChange'
    },
    init: function() {

        /**
         * Main IOC Configuration (DeftJS)
         * Application Dependency Injection Objects
         */
        var dateRange = Ext.create('Hindsight.model.DateRange');
        dateRange.set('startDate', new Date());
        dateRange.set('endDate', new Date());
        Deft.Injector.configure({
            applicationContext: {
                className: 'Hindsight.context.ApplicationContext'
            },
            sideNavItemsStore: {
                className:'Hindsight.store.SideNavItems'

            },
            topNavItemsStore: {
                className: 'Hindsight.store.TopNavItems',
                eager:true
            },
            advertisingViewCtrl: {
                className:'Hindsight.controller.insight.AdvertisingViewCtrl'

            },
            userStore: {
                className: 'Hindsight.store.UserStore'
            },
            user: {
                className: 'Hindsight.model.User'
            },
            brandedApplicationName: {
                value: "Hindsight Analytics"
            },
            dateRange: {
                className: "Hindsight.model.DateRange",
                value: dateRange
            },
            versionNumber: {
                value: 1.0
            },
            messageBus: {
                className: 'Hindsight.messages.MessageBus'
            },
            viewManager: {
                className: 'Hindsight.managers.ViewManager'
            },
            moduleManager: {
                className: 'Hindsight.managers.ModuleManager'
            },
            currentSite: {
                className: 'Hindsight.model.Site'
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

        // Set up QuickTips and create the Viewport
        //Ext.tip.QuickTipManager.init();
        Ext.create( "Hindsight.view.Viewport" );
        //console.log("created Viewport...");
    }

});