var OBJ = Ext.define('Hindsight.controller.InsightModuleCtrl', {
    extend: 'Deft.mvc.ViewController',
    inject: ['brandedApplicationName'],

    init: function() {
        console.log("InsightModuleCtrl.init.");

        return this.callParent(arguments);

    },
    control: {
        view: {
            boxready: function(){
                var el = Ext.get("sideBarContainer");
                console.log("animating sideBarContainer")
                el.animate({
                    to: {
                        opacity: 1
                    },
                    duration: 750,
                    delay:500

                });
                /*var el = Ext.get("insightViewStackContainer");
                el.animate({
                    to: {
                        opacity: 1
                    },
                    duration: 750,
                    delay:750,

                    listeners: {

                        afteranimate: function() {
                            // Execute my custom method after the animation
                            this.afterAnimate();
                        },
                        scope: this
                    }

                });*/
            }
        }
    }


});