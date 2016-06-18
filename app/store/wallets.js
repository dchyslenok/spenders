Ext.define('App.store.wallets', {
    extend: 'Ext.data.Store',
    alias: 'store.wallets',
    fields : [
        'ID', 'NAME'
    ],
    proxy : {
        type : 'direct',
        directFn : "Wallets.getList"
    }
});
