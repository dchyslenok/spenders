Ext.define('App.view.spenders.panels.wallets.views.Index', {
    extend : 'Ext.panel.Panel',
    xtype : 'wallets',
    ui : 'material-z1',
    requires : [
        'App.view.spenders.panels.wallets.controllers.IndexController',
        'App.view.spenders.panels.wallets.views.Add',
        'App.view.spenders.panels.wallets.views.Edit'
    ],
    controller : 'wallets',
    title : 'Wallet',
    reference : 'wallerTEsts',
    items : [{
        xtype : 'editWallet',
        reference : 'formEditWallet',
        title : 'Edit wallet',
        listeners : {
            editwallet : 'onEdit',
            deletewallet : 'onDelete',
            onEditIcon : 'selectIcon',
            cancel : 'cancel'
        }
    },{
        xtype : 'addWallet',
        reference : 'formAddWallet',
        listeners : {
            addwallet : 'onAdd',
            onAddIcon : 'selectIcon',
            cancel : 'cancel'
        }
    },{
        xtype : 'panel',
        reference : 'wallerList',
        layout : {
            type : 'responsivecolumn'
        },
        items : []
    }],
    listeners : {
        afterrender : 'onGetList',
        oniconselected : 'onIconSelected',
        update : 'onUpdate'
    }
});