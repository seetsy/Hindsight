Ext.define('Hindsight.controller.SideNavCtrl', {
    extend: 'Deft.mvc.ViewController',
    inject: ['messageBus'],
    init: function() {
        //console.log("Hindsight.controller.SideNavCtrl init!!!");
        //console.log(this.messageBus);
        /*Ext.util.Observable.observe(this.messageBus);
        this.messageBus.on('message', function(msg) {
            console.log('message fired: ',msg);
        });*/

        return this.callParent( arguments );

    },
    control: {
        sideNav: {
            itemClick: 'onItemClick'

        }
    },
    onMessage:function(subject, message) {
        //alert("onMessage!");
    },

    onItemClick: function(view, record, item, index, e, eOpts){
        this.messageBus.sendMessage("load_stock", {"symbol":"INTC"});
        var el = Ext.get(item);
        this.clearSelected(view);
        el.child('a').addCls("active");
    },

    clearSelected: function(view) {

        var items = view.getNodes();
        Ext.Array.each(items, function(item, index, allItems) {
            var el = Ext.get(item);
            el.child('a').removeCls("active");
        });
    }

});