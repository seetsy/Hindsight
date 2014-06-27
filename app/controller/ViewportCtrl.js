Ext.define('Hindsight.controller.ViewportCtrl', {
    extend: 'Deft.mvc.ViewController',
    inject: ['user', 'userStore','brandedApplicationName','moduleManager','viewManager'],
    alias: 'controller.viewportCtrl',
    control: {
        view: {
            add: function(params){
                this.onViewAdded(params)
            }
        }
    },
    constructor: function(){
        //console.log("Hindsight.controller.ViewportCtrl construct()!!!!");
    },
    init: function() {
        //console.log("Hindsight.controller.ViewportCtrl init():"+this.brandedApplicationName);

        this.showLoadingIndicator()

        return this.callParent(arguments);

    },
    onViewAdded: function(params){
        /**
         * Load up the intitial view
         * The moduleName and viewNames will have been previously set by the BrowserManagerCtrl
         */
        //console.log("ViewportCtrl.onViewAdded()");
        this.moduleManager.loadModule();
        this.viewManager.loadView();

    },

    /**
     * Show the loading indicator and fetch user from server
     */
    showLoadingIndicator: function() {
        var el = Ext.get("bodyLoadingContainerBox");
        el.animate({
            to: {
                opacity: 1
            },
            duration: 1000,
            listeners: {
                afteranimate: function() {
                    /**
                     * Load the user
                     */
                    this.loadUser();
                },
                scope: this
            }
        });
    },
    /**
     * Fade out the loading indicator and load main content
     */
    fadeOutLoader: function(){
        //console.log("fadeOutLoader()");
        var el = Ext.get("bodyLoadingContainerBox");
        el.animate({
            to: {
                opacity: 0
            },
            duration: 1000,
            listeners: {
                afteranimate: function() {
                    //console.log("afterAnimate!");
                    this.loadMainContent();
                },
                scope: this
            }
        });
    },
    /**
     * Load the user
     */
    loadUser: function() {
        this.userStore.load({
            scope: this,
            callback: function(record, operation, success) {
                if(success){
                    this.fadeOutLoader();
                }
            }

        });
    },
    /**
     * Load the main content after the user has been verified as authenticated
     */
    loadMainContent : function() {

        //this.getView().loadMainContent();
        this.getView().removeAll();
        this.getView().add(this.getView().appViewItems);
        //console.log("loadMainContent()");
        /**
         * Show the main content
         */
        var el = Ext.get("mainContainer");
        console.log("mainContainer...")
        console.dir(el);
        console.log("animating mainContainer...")
        el.animate({
            to: {
                opacity: 1
            },
            duration: 1000

        });
        //alert("pause before controlBarContainer")
        var el = Ext.get("controlBarContainer");
        console.log("animating controlBarContainer")
        el.animate({
            to: {
                opacity: 1
            },
            duration: 750,
            delay:250

        });
        //alert("pause after controlBarContainer")



    }

});

