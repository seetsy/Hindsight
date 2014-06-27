Ext.define('Hindsight.view.SideNav', {
    extend:'Ext.view.View',
    alias: 'widget.sidenav',
    id: 'sideNav',
    inject: {
        store: 'sideNavItemsStore'

    },
    itemSelector: 'div',
    itemTpl:'<a href="{href}" class="button" id="{viewName}"><span>{label}</span></a>'

});