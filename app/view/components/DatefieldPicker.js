Ext.define('Hindsight.view.components.DatefieldPicker', {
    extend:'Ext.container.Container',
    alias:'widget.datefieldPicker',
    inject: ['dateRange'],
    config: {
        textField:null,
        dateRangePanel:null,
        startDateField:null,
        endDateField:null,
        submitDateRangeButton:null,
        panelAlignment:null
    },

    items: [
        {
            xtype:'textfield',
            id:'textField',
            value: 'Start date - End date'
        },
        {
            xtype:'form',
            id: 'dateRangePanel',
            title: 'Choose Date Range',

            defaultType: 'datefield',
            hidden: true,
            closable: true,
            closeAction: 'hide',
            floating: true,
            items: [
                {
                    xtype: 'container',
                    padding: 12,
                    items: [
                        {
                            xtype: 'datefield',
                            id:'startDateField',
                            anchor: '100%',
                            fieldLabel: 'From',
                            name: 'fromDate',
                            itemId: 'fromDate',
                            maxValue: new Date(),
                            allowBlank:false

                        },
                        {
                            xtype: 'datefield',
                            id: 'endDateField',
                            anchor: '100%',
                            fieldLabel: 'To',
                            name: 'toDate',
                            itemId: 'toDate',
                            maxValue: new Date(),
                            allowBlank:false
                            //value: new Date()  // defaults to today
                        },
                        {
                            xtype:'button',
                            text: 'Apply',
                            id: 'submitDateRangeButton',
                            disabled:true,
                            formBind: true
                        }

                    ]
                }

            ]

        }
    ],
    initComponent: function() {

        this.callParent(arguments);

        this.textField = Ext.getCmp('textField');
        this.dateRangePanel = Ext.getCmp('dateRangePanel');
        this.startDateField = Ext.getCmp('startDateField');
        this.endDateField = Ext.getCmp('endDateField');
        this.startDateLabel = this.startDateField.up('form').down('#fromDate');
        this.endDateLabel = this.endDateField.up('form').down('#toDate');
        this.submitDateRangeButton = Ext.getCmp('submitDateRangeButton');
        this.submitDateRangeButton.on('click', function(){
            this.onSubmitDateRange();
        }, this);

        Ext.util.Observable.observe(this.textField);
        this.textField.on('focus', function() {
            this.showDatePicker();
        }, this);

        this.setDateRangeLabel();

    },

    showDatePicker: function(){
        this.dateRangePanel.show();
        var xPos;
        var yPos = this.textField.getSize().height;
        console.log (this.dateRangePanel.getSize().width)
        switch(this.panelAlignment){
            case 'left':
               xPos = 0;
                break;
            default:
                xPos =  -1*(this.dateRangePanel.getSize().width - this.textField.getSize().width);
                break;
        }
        this.dateRangePanel.setPosition(xPos, yPos);
        this.startDateLabel.setValue(this.dateRange.get('startDate'));
        this.endDateLabel.setValue(this.dateRange.get('endDate'));
    },
    onSubmitDateRange: function(){
        this.dateRange.set('startDate', this.startDateLabel.value);
        this.dateRange.set('endDate', this.endDateLabel.value)
        this.setDateRangeLabel();
        this.dateRangePanel.hide();
    },
    setDateRangeLabel: function(){
        //console.log("whereami?");
        /**
         * This doesn't work -- WHY???
         */
        //console.log(this.dateRange);
        var startDate = Ext.util.Format.date(this.dateRange.get('startDate'));
        var endDate = Ext.util.Format.date(this.dateRange.get('endDate'));
        var dateRangeTxt = startDate + ' - ' + endDate;

        var textField = Ext.getCmp('textField');
        textField.setValue(dateRangeTxt);
    }
})