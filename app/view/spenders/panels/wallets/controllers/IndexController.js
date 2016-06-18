Ext.define('App.view.spenders.panels.wallets.controllers.IndexController', {
    extend : 'Ext.app.ViewController',
    alias : 'controller.wallets',

    spenderMask : function () {
        var spenderLisd = this.lookupReference('wallerList')
        if (spenderLisd.isMasked()) {
            spenderLisd.unmask();
            this.fireViewEvent('spenderunmask', this);
        } else {
            spenderLisd.mask();
            this.fireViewEvent('spendermask', this);
        }
    },

    onUpdate : function (walletId) {
        var wallet = this.lookupReference('wallet' + walletId);
        Wallets.getItem(walletId, function (result, event, success, options) {
            if (success) {
                wallet.fireEvent('updatewallet', this, result);
            } else {
                Ext.Msg.alert('Failed', result ? result.message : 'No response');
            }
        }, this);
    },

    onGetList : function (id) {
        var me = this;
        var walletList = this.lookupReference('wallerList');
        var store = Ext.StoreManager.lookup('wallets');

        if (id) {
            walletList.remove(me.lookupReference('wallet' + id));
        }

        if (store.count() == 0) {
            walletList.removeAll();
            walletList.add({
                xtype : 'wallet',
                label : 'Add',
                iconCls : 'ic-add',
                handler : 'onAddWallet'
            });
            store.load();
        } else {
            store.reload();
        }

        store.on('load', function (store, records) {
            Ext.each(records, function (item) {
                if (!me.lookupReference('wallet' + item.data.ID)) {
                    walletList.add({
                        xtype : 'wallet',
                        reference : 'wallet' + item.data.ID,
                        walletId : item.data.ID,
                        label : item.data.NAME + ' (' + item.data.TYPE + ')',
                        iconCls : item.data.ICON,
                        balance : item.data.BALANCE,
                        handler : 'onEditWallet'
                    });
                }
            });
            walletList.unmask();
        }, me);
    },

    onEditWallet : function (el) {
        this.lookupReference('formEditWallet').fireEvent('onEditWallet', el.getWallet().getId());
        this.spenderMask();
    },

    onAddWallet : function () {
        this.lookupReference('formAddWallet').fireEvent('onAddWallet');
        this.spenderMask();
    },

    onAdd : function () {
        this.spenderMask();
        this.onGetList();
    },

    onDelete : function (el, id) {
        this.spenderMask();
        this.onGetList(id);
    },

    onEdit : function (el, form, id) {
        this.onUpdate(id);
        this.spenderMask();
    },

    cancel : function () {
        this.spenderMask();
    },

    selectIcon : function (el, btn) {
        this.fireViewEvent('selecticon', el);
    },

    onIconSelected : function (iconCls) {
        var form = this.lookupReference('formAddWallet');
        this.lookupReference('iconSelectBtn').setIconCls(iconCls);
        form.getForm().setValues({
            ICON : iconCls
        });
    }
});