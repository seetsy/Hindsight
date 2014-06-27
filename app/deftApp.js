Ext.application({
    name: 'Hindsight',
    requires:['Deft.ioc.Injector',
        'Deft.mvc.ViewController',
        'Hindsight.view.DeftViewport'
    ],
    onBeforeLaunch: function (){

        //this.callParent();
        alert("App constuct");
    },
    autoCreateViewport: true,
    launch: function() {

        //this.getView('DeftViewport').create();
    }


    //models: ['TopNavItem','SideNavItem'],
    //stores: ['TopNavItems', 'SideNavItems'],
    //stores: ['SideNavItems'],

    //controllers: ['AppCtrl','AppViewStackCtrl',  'TopNavCtrl']


});
Ext.Loader.setConfig({enabled:true});
