Ext.define('App.view.spenders.Index', {
    extend : 'Ext.panel.Panel',
    xtype : 'myspenders',
    requires : [
        'App.view.spenders.IndexController',
        'App.view.spenders.panels.spenders.views.Index',
        'App.view.spenders.panels.wallets.views.Index',
        'App.view.admin.ux.IconLists',
        'App.view.admin.ux.Wallet',
        'App.view.admin.ux.Spender'
    ],
    controller : 'spendepanel',
    title: 'Spenders',
    iconCls: 'fa-shopping-cart',
    ui : 'main',
    scrollable : true,
    defaults: {
        margin: 10
    },
    items : [{
        xtype : 'iconlist',
        reference : 'iconlist'
    },{
        xtype : 'wallets',
        reference : 'walletslist',
        listeners : {
            selecticon : 'onSelectIcon',
            spendermask : 'onWalletMask',
            spenderunmask : 'onWalletUnmask'
        }
    },{
        xtype : 'spenders',
        reference : 'spenderlist',
        listeners : {
            spend : 'onSpend',
            selecticon : 'onSelectIcon',
            spendermask : 'onSpenderMask',
            spenderunmask : 'onSpenderUnmask'
        }
    }]
});