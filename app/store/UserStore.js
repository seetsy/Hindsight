Ext.define('Hindsight.store.UserStore', {
    extend: 'Ext.data.Store',
    model: 'Hindsight.model.User',
    listeners: {
        datachanged: function(store, eOpts){
            var user = this.first();
            Deft.Injector.configure({
                user: {
                    value: user
                }
            });
        }
    }

});

