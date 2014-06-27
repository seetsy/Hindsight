Ext.define('Hindsight.proxy.XmlProxy',{
    extend: 'Ext.data.proxy.Ajax',
    alias: 'proxy.xmlproxy',

    reader: {
        type: 'xml',
        root: 'result',
        record: 'user',
        successProperty: '@success',
        messageProperty: '@error'

    },
    listeners: {
        exception: function(proxy, type, action, options){
           alert("An error occurred. " + action.error);
        }
    }
});