Ext.define('Hindsight.controller.BrowserManagerCtrl', {
    extend: 'Ext.app.Controller',
    inject: ['moduleManager', 'viewManager', 'brandedApplicationName'],
    config: {
        //moduleManager:null
    },
    init: function() {
        //console.log("Hindsight.controller.BrowserManagerCtrl.init: " + this.brandedApplicationName);
        this.callParent();
    },


    viewChange: function(params) {
        var module = params.module;
        //console.log("module: " + module);

        //this.viewManager.setCurrentViewName(view);
        var oldModule = this.moduleManager.getCurrentModuleName();
        //console.log("oldModule: " + oldModule);
        if(module !== oldModule) {
            this.moduleManager.setCurrentModuleName(module);
            this.moduleManager.loadModule();
        }

        /**
         * Handle view changes.
         * Views can have a lastView and the module's viewstack should not default to the first item if the lastView is set.
         *
         */
        var view = params.view;
        //console.log("view: " + view);
        var oldView = this.viewManager.getCurrentViewName();
        //console.log("oldView: " + oldView);
        if(view == undefined) {
            if(this.viewManager.getLastView() != undefined && this.viewManager.getLastView() != '') {
                view = this.viewManager.getLastView();
            }
        }
        if(view !== oldView) {
            if(oldView != null && oldView != undefined && oldView != '') {
                this.viewManager.setLastView(oldView);
            }
            this.viewManager.setCurrentViewName(view);
            this.viewManager.loadView();
        }
    }

});