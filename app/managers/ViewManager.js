Ext.define('Hindsight.managers.ViewManager',{
    mixins: {
        observable: 'Ext.util.Observable'
    },
    inject: ['moduleManager'],
    statics: {
        INSIGHT_OVERVIEW: 'insightOverview',
        ADVERTISING_VIEW:'advertising',
        TRAFFIC_SOURCES_VIEW:'trafficSources',
        CONTENT_VIEW:'content'
    },
    config: {
        currentViewName:'',
        _currentViewStack:null,
        defaultViewName:'',
        lastView:''
        /*currentViewTitle:'',
        currentView:null*/
    },
    setCurrentViewStack : function(viewStack) {

        this._currentViewStack = viewStack;
    },
    getCurrentViewStack : function() {
        return this._currentViewStack;
    },
    constructor: function(config) {
        this.mixins.observable.constructor.call(this, config);
        this.addEvents(
            'viewChanged'
        );

        this.initConfig(config);
    },
    loadView: function(){

        if(this.getCurrentViewStack() != null) {
            this.getCurrentViewStack().loadView(this.getViewIndex());
            this.fireEvent('viewChanged');
        }

    },
    getViewIndex: function(){
        switch (this.getCurrentViewName()) {
            case Hindsight.managers.ViewManager.INSIGHT_OVERVIEW:
            default:
                return 0;
                break;
            case Hindsight.managers.ViewManager.ADVERTISING_VIEW:

                return 1;
                break;
            case Hindsight.managers.ViewManager.TRAFFIC_SOURCES_VIEW:
                return 2;
                break;
            case Hindsight.managers.ViewManager.CONTENT_VIEW:
                return 3;
                break;

        }
    },
    setCurrentViewName: function(viewName) {
        if(viewName == undefined || viewName == '') {
            viewName = this.getDefaultViewName();
        }
        this.currentViewName = viewName;

    },
    getDefaultViewName: function(){

        switch(this.moduleManager.currentModuleName){
            case Hindsight.managers.ModuleManager.INSIGHT_MODULE:
                return Hindsight.managers.ViewManager.INSIGHT_OVERVIEW;
                break;

        }
        return null;
    }

},function(){


});