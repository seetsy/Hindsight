Ext.define("Hindsight.context.ApplicationContext", {
    extend: "Hindsight.context.AbstractContext",


    constructor: function(config) {
        if (config == null) {
            config = {};
        }
        this.callParent(arguments);
        return this.addEvents("getVisitsDataLoaded");
    },
    /**
     * Notifies interested objects that getVisits data has been loaded.
     */

    getVisitsDataLoaded: function(data) {
        /**
         * @event getVisitsDataLoaded GetVisitsService data loaded.
         */
        return this.fireEvent("getVisitsDataLoaded", data);
    }

});
