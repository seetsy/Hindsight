Ext.define("Hindsight.context.AbstractContext", {
    mixins: {
        observable: "Ext.util.Observable"
    },
    inject: ["messageBus"],
    config: {
        messageBus: null
    },
    constructor: function(config) {
        if (config == null) {
            config = {};
        }
        this.mixins.observable.constructor.call(this);
        this.initConfig(config);
        return this.callParent(arguments);
    }
});
