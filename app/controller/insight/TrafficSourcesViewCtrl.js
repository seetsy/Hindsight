Ext.define('Hindsight.controller.insight.TrafficSourcesViewCtrl', {
    extend: 'Deft.mvc.ViewController',


    control: {
        view: {
            onRender: function(){
                alert("onRender");
            }
        }
    },
    constructor: function(){

    },
    init: function() {

        return this.callParent(arguments);

    }


});