Ext.define('Hindsight.messages.MessageBus', {
    extend: 'Ext.util.Observable',

    statics: {
        instance: null,
        setInstance: function(i) {
            this.instance = i;
        },
        sendMessage: function(msg, data) {
            this.fireEvent('HindsightMessage',{"msg":msg,"data":data});
        }
    },
    sendMessage: function(msg, data) {
        this.fireEvent('HindsightMessage',{"msg":msg,"data":data});
    },
    constructor: function(config){
        this.addEvents({
            "HindsightMessage" : true
        });

        if(config && config.listeners) this.listeners = config.listeners;

        Hindsight.messages.MessageBus.superclass.constructor.call(this, config)
    },
    subscribe: function(msg, callback) {
        this.addEvents(msg);
        this.on(msg, callback);
    },
    unsubscribe: function() {
        //
    },
    publish: function(msg, data) {

        this.fireEvent(msg, {"msg":msg,"data":data});
    }

}, function() {
    Hindsight.messages.MessageBus.setInstance(new Hindsight.messages.MessageBus());
});
