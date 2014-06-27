Ext.define('Hindsight.controller.insight.AdvertisingViewCtrl', {
    extend: 'Deft.mvc.ViewController',


    control: {
        view: {
            onRender: function(){
                alert("onRender");
            },
            boxready: function() {
                var el = Ext.get("insightsAdvertisingContainer");
                el.animate({
                    to: {
                        opacity: 1
                    },
                    duration: 750,
                    delay:750,

                    listeners: {

                        afteranimate: function() {
                            // Execute my custom method after the animation
                            //this.afterAnimate();
                        },
                        scope: this
                    }

                });
            }
        }
    },
    constructor: function(){

    },
    init: function() {
        console.log("AdvertisingViewCtrl.init")
        return this.callParent(arguments);

    }


});