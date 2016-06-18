Ext.define('App.view.spenders.panels.spenders.views.Spend', {
    extend : 'Ext.form.Panel',
    requires : [
        'App.view.spenders.panels.spenders.controllers.SpendController'
    ],
    xtype : 'formspend',
    controller : 'spend',
    title : 'Add spend',
    api : {
        submit : 'Spenders.spend'
    },
    ui : 'material-z1',
    layout : {
        type : 'responsivecolumn',
        states : {
            small : 800,
            large : 0
        }
    },
    margin: '5 5 7 5',
    frame : false,
    border : true,
    hidden : true,
    listeners : {
        onAddSpend : 'onSpend',
        oniconselected : 'onIconSelected'
    },
    items : [{
        xtype : 'container',
        reference : 'walletList',
        layout : 'responsivecolumn'
    },{
        xtype : 'responsivefieldset',
        responsiveCls : 'large-50 small-100',
        border : false,
        items : [{
            xtype : 'hiddenfield',
            name : 'SPENDER_ID'
        }, {
            xtype : 'hiddenfield',
            fieldLabel : 'Choose wollet',
            name : 'WALLET_ID'
        }, {
            xtype : 'textfield',
            fieldLabel : 'Choose wollet',
            name : 'WALLET_NAME',
            readOnly : true,
            allowBlank : false
        }, {
            xtype : 'numberfield',
            fieldLabel : 'Spend',
            name : 'SPEND',
            allowBlank : false
        }, {
            xtype : 'textarea',
            fieldLabel : 'Notes',
            name : 'NOTE'
        }]
    }],
    buttons : [{
        xtype : 'button',
        text : 'add',
        iconCls : 'ic-save',
        formBind : true,
        width : 60,
        handler : 'spend'
    }, {
        xtype : 'button',
        text : 'Cancel',
        iconCls : 'ic-close',
        width : 60,
        handler : 'cancel'
    }, '->', {
        xtype : 'button',
        text : 'Edit',
        iconCls : 'ic-edit',
        width : 60,
        handler : 'onEditSpender'
    }, '|', {
        xtype : 'button',
        text : 'Delet',
        iconCls : 'ic-del',
        width : 60,
        handler : 'deleteSpender'
    }]
});