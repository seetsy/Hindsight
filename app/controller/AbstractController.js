Ext.define("Hindsight.controller.AbstractController", {
    extend: "Deft.mvc.ViewController",
    inject: ["applicationContext", "messageBus"],
    config: {
        hindsightContext: null,
        messageBus: null
    },
    init: function() {
        return this.callParent(arguments);
    }
});