Ext.define('App.view.spenders.panels.spenders.controllers.SpendController', {
    extend : 'Ext.app.ViewController',
    alias : 'controller.spend',

    onEditSpender : function () {
        var form = this.getView();
        this.fireViewEvent('editspender', form.getForm().findField('SPENDER_ID').getValue());
        form.hide();
    },

    onSpend : function (id) {
        var me = this;
        var form = this.getView();
        var walletList = this.lookupReference('walletList');
        var walletStore = Ext.StoreManager.lookup('wallets');
        walletList.mask();
        walletStore.reload();
        walletStore.on('load', function (store, records) {
            walletList.removeAll();
            Ext.each(records, function (item) {
                walletList.add({
                    xtype : 'wallet',
                    reference : 'wallet' + item.data.ID,
                    label : item.data.NAME + ' (' + item.data.TYPE + ')',
                    iconCls : item.data.ICON,
                    walletId : item.data.ID,
                    toggleGroup : 'wallets',
                    balance : item.data.BALANCE,
                    handler : function (el) {
                        form.getForm().setValues({
                            WALLET_ID : el.getWallet().getId(),
                            WALLET_NAME : el.getWallet().getName()
                        });
                    }
                });
            });
            walletList.unmask();
        }, this);

        form.getForm().setValues({
            SPENDER_ID : id
        });
        form.show();
    },

    spend : function () {
        var me = this;
        var form = this.getView();
        var spenderId = form.getForm().findField('SPENDER_ID').getValue();
        var walletId = form.getForm().findField('WALLET_ID').getValue();

        form.getForm().submit({
            success : function () {
                me.fireViewEvent('spend', me, spenderId, walletId);
                form.reset();
                form.hide();
            },
            failure : function (form, action) {
                Ext.Msg.alert('Failed', action.result ? action.result.message : 'No response');
            }
        }, this);
    },

    deleteSpender : function () {
        var me = this;
        var form = this.getView();
        Ext.Msg.show({
            title:'Delete spender?',
            message: 'Are you sure you want to delete this?',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function(btn) {
                if (btn === 'yes') {
                    Spenders.delete(form.getForm().findField('SPENDER_ID').getValue(), function (result, event, success, options) {
                        if (success) {
                            Ext.StoreManager.lookup('spenders').reload();
                            me.getView().hide();
                            me.fireViewEvent('deletespender', form.getForm().findField('SPENDER_ID').getValue());
                        } else {
                            Ext.Msg.alert('Failed', result ? result.message : 'No response');
                        }
                    }, this);
                } else if (btn === 'no') {
                }
            }
        });
    },

    cancel : function () {
        var view = this.getView();
        view.reset();
        view.hide();
        this.fireViewEvent('cancel', this);
    }
});