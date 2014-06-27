Ext.define('Hindsight.store.HindsightStore', {
    extend: 'Ext.data.Store',
    call: function(params) {
        var deferred = Ext.create('Deft.Deferred');
        this.setProxy(this.proxy);
        this.getProxy().setReader(this.reader);
        this.load(
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