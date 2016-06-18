Ext.define('App.view.spenders.panels.spenders.views.Index', {
    extend : 'Ext.panel.Panel',
    xtype : 'spenders',
    ui : 'material-z1',
    requires : [
        'App.view.spenders.panels.spenders.controllers.IndexController',
        'App.view.admin.ux.ResponsiveFieldset',
        'App.view.spenders.panels.spenders.views.Add',
        'App.view.spenders.panels.spenders.views.Edit',
        'App.view.spenders.panels.spenders.views.Spend'
    ],
    controller : 'spenders',
    title : 'Spenders',
    items : [{
        xtype : 'editSpender',
        reference : 'formEditSpender',
        title : 'Edit spender',
        listeners : {
            editspender : 'onEdit',
            onEditIcon : 'selectIcon',
            cancel : 'cancel'
        }
    },{
        xtype : 'addSpender',
        reference : 'formAddSpender',
        listeners : {
            addspender : 'onAdd',
            onAddIcon : 'selectIcon',
            cancel : 'cancel'
        }
    }, {
        xtype : 'formspend',
        reference : 'formAddSpend',
        listeners : {
            spend : 'onSpend',
            cancel : 'cancel',
            deletespender: 'onDelete',
            editspender : 'onEditSpender'
        }
    }, {
        xtype : 'container',
        reference : 'spenderList',
        layout : {
            type : 'responsivecolumn'
        }
    }],
    listeners : {
        afterrender : 'onGetList',
        oniconselected : 'onIconSelected',
        edit : 'onUpdate'
    }
});