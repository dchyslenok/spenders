Ext.define('App.view.spenders.panels.wallets.views.Edit', {
    extend : 'Ext.form.Panel',
    requires : [
        'App.view.spenders.panels.wallets.controllers.EditController'
    ],
    xtype : 'editWallet',
    controller : 'editWallet',
    title : 'Edit wallet',
    api : {
        submit : 'Wallets.edit'
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
    buttonAlign : 'left',
    listeners : {
        onEditWallet : 'onEdit',
        oniconselected : 'onIconSelected'
    },
    items : [{
        xtype : 'responsivefieldset',
        responsiveCls : 'large-50 small-100',
        border : false,
        items : [{
            xtype : 'hiddenfield',
            name : 'ID'
        },{
            xtype : 'container',
            layout : {
                type : 'vbox',
                align : 'left'
            },
            items : [{
                xtype : 'label',
                width : 80,
                style : 'text-align:center;',
                text : 'Select icon:'
            }, {
                xtype : 'button',
                reference : 'iconSelectBtn',
                iconCls : 'ic-add',
                ui : 'wallet',
                scale : 'large',
                width : 55,
                height : 55,
                margin : 15,
                handler : 'selectIcon'
            }]
        }, {
            xtype : 'textfield',
            fieldLabel : 'Wallet name',
            name : 'NAME'
        }, {
            xtype : 'numberfield',
            fieldLabel : 'Amount currency',
            name : 'BALANCE'
        }, {
            xtype : 'combobox',
            fieldLabel : 'Type',
            emptyText : 'type',
            name : 'TYPE',
            displayField : 'NAME',
            valueField : 'NAME',
            triggerAction : 'all',
            queryMode : 'local',
            forceSelection : true,
            editable : false,
            store : Ext.create('Ext.data.Store', {
                fields : ['name'],
                data : [
                    {"NAME" : "грн"},
                    {"NAME" : "$"},
                    {"NAME" : "руб"}
                ]
            })
        },{
            xtype : 'checkbox',
            fieldLabel : 'Negative balance',
            name : 'IS_NEGATIVE',
            value : false
        },{
            xtype : 'textfield',
            name : 'ICON',
            value : 'ic-add',
            hidden : true
        }]
    }],
    buttons : [{
        xtype : 'button',
        text : 'Save',
        formBind : true,
        iconCls : 'ic-save',
        width : 60,
        handler : 'save'
    }, {
        xtype : 'button',
        text : 'Cancel',
        iconCls : 'ic-close',
        width : 60,
        handler : 'cancel'
    },'->', {
        xtype : 'button',
        text : 'Delet',
        iconCls : 'ic-del',
        width : 60,
        handler : 'deleteWallet'
    }]
});