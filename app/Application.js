Ext.define('App.Application', {
    extend: 'Ext.app.Application',
    
    name: 'App',

    stores: [
        'wallets',
        'spenders'
    ],
    
    launch: function () {
        Ext.direct.Manager.addProvider(Ext.REMOTING_API);
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
