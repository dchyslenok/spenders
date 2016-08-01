/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('App.Application', {
    requires: [
        'Ext.direct.*',
        'Ext.data.*'
    ],
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
