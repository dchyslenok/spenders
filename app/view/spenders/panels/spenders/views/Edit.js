Ext.define('App.view.spenders.panels.spenders.views.Edit', {
    extend : 'Ext.form.Panel',
    requires : [
        'App.view.spenders.panels.spenders.controllers.EditController'
    ],
    xtype : 'editSpender',
    controller : 'editSpender',
    title : 'Edit spender',
    api : {
        submit : 'Spenders.edit'
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
        onEditSpender : 'onEdit',
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
                ui : 'spender',
                scale : 'large',
                width : 55,
                height : 55,
                margin : 15,
                handler : 'selectIcon'
            }]
        }, {
            xtype : 'textfield',
            fieldLabel : 'Spender name',
            name : 'NAME',
            allowBlank : false
        }, {
            xtype : 'numberfield',
            fieldLabel : 'Plenet spend',
            name : 'PL_SPEND',
            allowBlank : false
        }, {
            xtype : 'textfield',
            fieldLabel : 'Group name',
            name : 'NAME_GROUP',
            hidden : true
        }, {
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
    }]
});