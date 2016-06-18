Ext.define('App.view.spenders.panels.wallets.controllers.AddController', {
    extend : 'Ext.app.ViewController',
    alias : 'controller.addWallet',

    onAdd : function () {
        this.getView().show();
    },

    save : function () {
        var me = this;
        var form = this.getView();

        form.getForm().submit({
            success : function () {
                me.lookupReference('iconSelectBtn').setIconCls('ic-add');
                form.reset();
                form.hide();
                Ext.StoreManager.lookup('wallets').reload();
                me.fireViewEvent('addwallet', me);
            },
            failure : function (form, action) {
                Ext.Msg.alert('Failed', action.result ? action.result.message : 'No response');
            }
        }, this);
    },

    cancel : function () {
        var view = this.getView();
        this.lookupReference('iconSelectBtn').setIconCls('ic-add');
        view.reset();
        view.hide();
        this.fireViewEvent('cancel', this);
    },

    selectIcon : function (el) {
        this.fireViewEvent('onAddIcon', el);
    },

    onIconSelected : function (iconCls) {
        var form = this.getView();
        this.lookupReference('iconSelectBtn').setIconCls(iconCls);
        form.getForm().setValues({
            ICON : iconCls
        });
    }
});