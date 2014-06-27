Ext.define('Hindsight.services.HindsightService', {

    call: function(params) {
        var deferred = Ext.create('Deft.Deferred');
        this.store.setProxy(this.proxy);
        this.store.load(
            {
                scope: this,
                callback: function(records, operation, success) {
                    // the operation object
                    // contains all of the details of the load operation
                    //console.log(records);
                    if( success ) {
                        deferred.resolve( records )
                    } else {
                        deferred.reject( "Error loading data." );
                    }

                }
            }
        );
        return deferred.promise;
    }



})