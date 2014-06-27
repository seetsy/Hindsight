Ext.define('Hindsight.commands.GetVisitsCommand', {
    extend: 'Hindsight.commands.RemoteServiceCommand',
    inject: {
        store:'periodSummaryStore'
    },

    /**
     * Execute Function
     */
    execute: function(){
        //this.store.getProxy().setReader(this.reader);
        this.store.call().then(
            {
                scope: this,
                success: function(records) {
                    this.result(records);
                },
                failure: function(error) {
                    this.error(error);
                }
            }
        ).always(
            function(){
                //console.log("Always: PERIOD SUMMARY STORE LOADED.")
            }
        );


    },
    /**
     * Async Response Handler
     * @param records
     */
    result: function(records){
        //console.log("this is some success");
        this.callParent(arguments);
    }



})