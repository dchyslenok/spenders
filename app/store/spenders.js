Ext.define('App.store.spenders', {
    extend: 'Ext.data.Store',
    alias: 'store.spender',
    fields : [
        'ID', 'NAME'
    ],
    proxy : {
        type : 'direct',
        directFn : "Spenders.getList"
    }
});
