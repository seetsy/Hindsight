/**
 * Application navigation is handled via the Ext.ux.Router.
 * The Router is mapped to the url value in the navigation items.
 * The state of the TopNav view is effected by the moduleChanged event.
 */
Ext.define('Hindsight.controller.TopNavCtrl', {
    extend: 'Deft.mvc.ViewController',
    inject: ['moduleManager','brandedApplicationName'],
    observe: {
        // Watch for module changes
        moduleManager: {
            moduleChanged: "onModuleChanged"
        }
    },
    control: {
        topNavigation: {
            /*itemClick: 'onItemClick',
            renderComplete: function(){
                console.log("topNavigation rendered...")
            }*/
            listeners: {

                viewready: {
                    fn: 'topNavViewReady'
                }
            }

        }
    },
    topNavViewReady: function(){
        //alert("topNavigation view ready...");
        this.onModuleChanged();
    },
    init: function() {

        return this.callParent( arguments );
    },

    setSelected: function(view) {
        var currentModule = this.moduleManager.getCurrentModuleName();
        var items = view.getNodes();

        Ext.Array.each(items, function(item, index, allItems) {
            var el = Ext.get(item);

            //console.log("el:");
            //console.log("el.id: " + el.id);
            if(el.id == currentModule){
                el.child('a').addCls("active");
            } else {
                el.child('a').removeCls("active");
            }
        });
    },
    onModuleChanged: function(){
        var currentModule = this.moduleManager.getCurrentModuleName();
        var nav = Ext.getCmp('topNavigation');
        //console.log("currentModule: " + currentModule);
        this.setSelected(nav);

    }

});