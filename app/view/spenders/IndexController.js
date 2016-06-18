Ext.define('App.view.spenders.IndexController', {
    extend : 'Ext.app.ViewController',
    alias : 'controller.spendepanel',

    onSpend : function (el, form, walletID) {
        this.lookupReference('walletslist').fireEvent('update', walletID);
    },

    onSelectIcon : function (el, callForm) {
        this.lookupReference('walletslist').hide();
        this.lookupReference('spenderlist').hide();
        this.lookupReference('iconlist').show();
        this.lookupReference('iconlist').setCallForm(callForm);
    },

    iconSelected : function (el) {
        var iconCls = el.iconCls;
        var callForm = this.lookupReference('iconlist').getCallForm();
        callForm.fireEvent('oniconselected', iconCls);
        callForm.up().show();
        this.lookupReference('iconlist').hide();
    },

    onSpenderMask : function () {
        this.lookupReference('walletslist').hide();
    },

    onSpenderUnmask : function () {
        this.lookupReference('walletslist').show();
    },

    onWalletMask : function () {
        this.lookupReference('spenderlist').hide();
    },

    onWalletUnmask : function () {
        this.lookupReference('spenderlist').show();
    }
});