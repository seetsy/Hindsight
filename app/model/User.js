Ext.define('Hindsight.model.User', {
    extend: 'Ext.data.Model',
    requires: 'Hindsight.proxy.XmlProxy',
    fields: [{name:'id',mapping:'@id'},
        {name:'name', mapping: '@name'},
        {name:'email', mapping:'@email'},
        {name: 'username', mapping:'@username'}
    ],
    proxy: {
        type: 'xmlproxy',
        url: '/auth/user/index.xml',
        listeners: {
            exception: function(proxy, type, action, options){
                Ext.Msg.show({title:'Error',
                    //msg: action.error,
                    msg: 'Please log in to continue.',
                    buttons: Ext.Msg.OK,
                    fn: function(){
                        /**
                         * redirect to login on failure
                         */
                        self.location = '/login';
                    }
                })
            }
        }
    }

});
