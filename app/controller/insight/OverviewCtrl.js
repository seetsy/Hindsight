Ext.define('Hindsight.controller.insight.OverviewCtrl', {
    //extend: 'Deft.mvc.ViewController',
    extend: 'Hindsight.controller.AbstractController',
    inject: ['currentSite', 'periodSummaryStore', 'getVisitsCommand'],

    requires: [
        'Hindsight.model.PeriodMetrics',
        'Hindsight.commands.GetVisitsCommand'
    ],
    config: {

        chartStore: null
    },
    observe: {
        messageBus: {
            HindsightMessage: 'onMessage'
        },
        applicationContext: {
            getVisitsDataLoaded: 'onGetVisitsDataLoaded'
        },
        periodSummaryStore: {
            load: 'onStoreLoaded'
        }

    },
    onStoreLoaded: function(){
       this.createChart();
        //this.pubSub.subscribe("myMessage", this.onPubSub)
        this.getMessageBus().publish("myCustomMessage",{something:"awesome"});
        //this.applicationContext.getVisitsDataLoaded();
    },
    onPubSub: function() {
        alert("onPubSub")
    },
    onGetVisitsDataLoaded: function() {
        //alert("onGetVisitsDataLoaded...");
        //this.createChart();
    },
    onMessage: function(e){
        //console.dir(e);

    },
    onCustomMessage: function(e) {
        console.dir(e);
        alert("custom message fired!");
    },
    init: function() {
        //alert("init!");
        //this.getMessageBus().sendMessage("OverviewCtrl.view.boxready...",{something:"nothing"});
        this.getMessageBus().subscribe("myCustomMessage", this.onCustomMessage);
        return this.callParent(arguments);

    },
    control: {
        view: {
            boxready:function(){
                //this.getMessageBus().sendMessage("OverviewCtrl.view.boxready...",{something:"nothing"});
                var el = Ext.get("insightsOverviewContainer");
                el.animate({
                    to: {
                        opacity: 1
                    },
                    duration: 750,
                    delay:750,
                    listeners: {
                        afteranimate: function(e) {

                            this.loadPeriodSummaryStore();
                        },
                        scope: this
                    }

                });

            },
            beforehide: function(e) {
                //console.dir(e);
                //alert("beforehide...");
                //e.preventDefault();

            },
            hide: function() {
                //alert("hide");
            },
            show: function() {
                //alert("show");
            }
        },

        chartContainer: true
    },
    loadPeriodSummaryStore: function(){

        this.getVisitsCommand.execute();
        /**
         * Next up - Command Mapping!
         */
    },
    createChart: function(){
        //console.log("OverviewCtrl.createChart()");
        var periodSummary = this.periodSummaryStore.first();
        var metrics = periodSummary.metrics();
        this.chartStore = metrics;
        var chart = Ext.create('Ext.chart.Chart', {
            height: 250,
            cls: 'stretch',
            store: this.chartStore,
            axes: [
                {
                    title: 'Visits',
                    type: 'Numeric',
                    position: 'left',
                    fields: ['visits']
                },
                {
                    title: 'Time',
                    type: 'Time',
                    position: 'bottom',
                    fields: ['date'],
                    dateFormat: 'M d',
                    grid: {
                        odd: {
                            opacity:.5,
                            fill: '#ddd'
                        }
                    },
                    label: {
                        rotate: {
                            degrees: 315
                        }
                    }
                }
            ],
            series: [
                {
                    type: 'line',
                    xField: 'date',
                    yField: 'visits',
                    tips: {
                        trackMouse: true,
                        width: 100,
                        renderer: function(storeItem, item) {
                            this.setTitle(storeItem.get('visits') + ' visits');
                        }
                    }
                }
            ],

            theme: 'Green',
            animate: true
        });

        this.getChartContainer().add(chart);
    }



});