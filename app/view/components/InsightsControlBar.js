Ext.define('Hindsight.view.components.InsightsControlBar', {
    extend:'Ext.container.Container',
    alias: 'widget.insightsControlBar',
    cls: 'viewHead',
    requires: ['Hindsight.view.components.DatefieldPicker'],
    layout:{
        type:'hbox',
        pack:'start',
        align:'stretch'
    },
    items:[
        {
            xtype:'container',
            flex:1,
            width: 300,
            layout:'hbox',
            cls: 'controlBarTitle',
            items:[
                {
                    xtype:'image',
                    src: 'images/chartIcon.png'
                },
                {
                    xtype:'label',
                    text:'Insights: Overview',
                    cls: 'h1'

                }
            ]
        },
        {
            xtype:'container',
            flex: 1,
            cls: 'textRight',
            items:[
                {
                    xtype:'siteLabel',
                    id: 'siteLabel',
                    cls: 'h2'

                },
                {
                    xtype:'container',
                    cls: 'floatRight',
                    flex: 1,


                    items: [
                        {
                            xtype:'datefieldPicker',
                            id:'dateFieldPicker'
                        }


                    ]
                }
            ]
        }



    ]

})