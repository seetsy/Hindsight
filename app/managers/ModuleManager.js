Ext.define('Hindsight.managers.ModuleManager',{
    mixins: {
        observable: 'Ext.util.Observable'
    },

    statics: {
        HOME_MODULE:'home',
        SITES_MODULE:'sites',
        IMPORT_MODULE:'import',
        INSIGHT_MODULE:'insights'
    },
    config: {
        currentModuleName:'',
        currentModuleContainer:null

    },
    constructor: function(config) {
        this.mixins.observable.constructor.call(this, config);
        this.addEvents(
            'moduleChanged'
        );
        this.initConfig(config);
    },
    loadModule: function(){
        if(this.currentModuleContainer != null) {
            console.log("ModuleManager.loadModule()");
            this.currentModuleContainer.loadModule(this.getModuleIndex());
            this.fireEvent('moduleChanged');
        }

    },
    getModuleIndex: function(){
        switch (this.getCurrentModuleName()) {
            case Hindsight.managers.ModuleManager.HOME_MODULE:
            default:
                return 0;
                break;
            case Hindsight.managers.ModuleManager.SITES_MODULE:
                return 1;
                break;
            case Hindsight.managers.ModuleManager.IMPORT_MODULE:
                return 2;
                break;
            case Hindsight.managers.ModuleManager.INSIGHT_MODULE:
                return 3;
                break;
        }
    }

},function(){

});