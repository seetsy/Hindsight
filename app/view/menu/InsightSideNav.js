Ext.define('Hindsight.view.menu.InsightSideNav', {
    extend:'Ext.view.View',
    alias: 'widget.insightSideNav',
    //id: 'insightSideNav',
    cls:'sideNav',
    inject: {
        store: 'sideNavItemsStore'

    },
    itemSelector: 'div.tplWrapper',
    itemTpl:'<div class="tplWrapper" id="{viewName}"><a href="{href}" class="button"><span>{label}</span></a></div>'


});