Ext.define('Hindsight.controller.menu.InsightSideNavCtrl', {
    extend: 'Deft.mvc.ViewController',
    inject: ['viewManager'],
    observe: {
        // Watch for module changes
        viewManager: {
            viewChanged: "onViewChanged"
        }
    },
    init: function() {


        return this.callParent( arguments );

    },
    control: {
        insightSideNav: {
            //itemClick: 'onItemClick',
            viewready: 'onSideNavViewReady'

        }
    },
    onSideNavViewReady: function(){
        //console.log("onSideNavViewReady...");
        this.onViewChanged();
    },
    onMessage:function(subject, message) {
        //alert("onMessage!");
    },

    onItemClick: function(view, record, item, index, e, eOpts){

        /*var el = Ext.get(item);
        this.clearSelected(view);
        el.child('a').addCls("active");*/


    },

    setSelected: function(view) {
        var currentView = this.viewManager.getCurrentViewName();
        var items = view.getNodes();

        Ext.Array.each(items, function(item, index, allItems) {
            var el = Ext.get(item);

            //console.log("el:");
            //console.log(el);
            //console.log("el.id: " + el.id);
            if(el.id == currentView){
                el.child('a').addCls("active");
            } else {
                el.child('a').removeCls("active");
            }
        });
        /*var items = view.getNodes();
        Ext.Array.each(items, function(item, index, allItems) {
            var el = Ext.get(item);
            el.child('a').removeCls("active");
        });*/
    },
    onViewChanged: function(){
        //console.log("InsightSideNavCtrl. onViewChanged!");
        var currentView = this.viewManager.getCurrentViewName();
        //console.log("currentViewName: " + currentView);
        //console.log("lastView: " + this.viewManager.getLastView());
        var nav = Ext.getCmp('insightSideNav');
        //console.log(nav);
        this.setSelected(nav);
    }

});