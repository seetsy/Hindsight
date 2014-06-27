/**
 * Model extended to fire a propertyUpdated event whenever a property is updated.
 * This can be used for generic data binding on model properties.
 */
Ext.define('Hindsight.model.HindsightModel', {
    extend:'Ext.data.Model',
    mixins: {
        observable: 'Ext.util.Observable'
    },
    constructor: function (config) {
        this.mixins.observable.constructor.call(this, config);
        this.callParent(config);
    },
    /**
     * Overrides set method to fire a 'propertyUpdated' event.
     * @param prop - The property name
     * @param value - The property value
     */
    set: function(prop,value) {
        /*console.log("set(): " + prop);
        console.log("oldValue: " + oldValue);
        console.log("value: " + value);*/
        var oldValue = this.get(prop);
        if(oldValue !== value) {
            this.callParent(arguments);
            this.fireEvent("propertyUpdated");
            //console.log("Hindsight.model.HindsightModel propertyUpdated");
        }

    }
});