Ext.define('Hindsight.view.components.SiteLabel', {
    extend:'Ext.form.Label',
    alias: 'widget.siteLabel',
    inject:['currentSite'],
    text: 'Site Label',
    initComponent: function (){
        this.setText(this.currentSite.get('name'));
        /**
         * Bind the label text to the currentSite name
         */
        Ext.util.Observable.observe(this.currentSite);
        this.currentSite.on('propertyUpdated', function() {
            this.onSiteUpdate();
        }, this);
        this.callParent(arguments);
    },
    onSiteUpdate: function(){
        this.setText(this.currentSite.get('name'));
    }
})