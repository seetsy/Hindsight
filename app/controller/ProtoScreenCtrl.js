Ext.define('Hindsight.controller.ProtoScreenCtrl', {
    extend: 'Deft.mvc.ViewController',
    inject: ['brandedApplicationName','dateRange'],

    control: {

        textField: {
            boxready: function(){
                this.setDateRangeLabel();
            },

            focus: function(){
                this.showDatePicker();
            }
        },
        dateRangePanel:true,
        fromDate:true,
        toDate:true,
        submitDateRangeButton: {
            click: function(){
                this.onSubmitDateRange();
            }
        }
    },

    init: function() {
        /*Ext.util.Observable.observe(this.dateRange);
        this.dateRange.on('propertyUpdated', function() {
            this.onDateRangeUpdated();
        }, this);*/
        return this.callParent(arguments);
    },

    showDatePicker: function(){
        var panel = this.getDateRangePanel();
        panel.show();
        console.log(this.getFromDate());
        this.getFromDate().setValue(this.dateRange.startDate);
        this.getToDate().setValue(this.dateRange.endDate);


    },
    onSubmitDateRange: function(){

        this.dateRange.set('startDate', this.getFromDate().value);
        this.dateRange.set('endDate', this.getToDate().value)
        this.setDateRangeLabel();
        console.log("startDate: " + this.dateRange.startDate);
    },
    onDateRangeUpdated: function(){
        console.log("onDateRangeUpdated");
        alert("onDateRangeUpdated");
        //this.setDateRangeLabel();
    },
    setDateRangeLabel: function(){
        var startDate = Ext.util.Format.date(this.dateRange.get('startDate'));
        var endDate = Ext.util.Format.date(this.dateRange.get('endDate'));
        var dateRangeTxt = startDate + ' - ' + endDate;
        this.getTextField().setValue(dateRangeTxt);
    }



});

