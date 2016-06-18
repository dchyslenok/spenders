Ext.define('App.view.spenders.panels.spenders.controllers.IndexController', {
    extend : 'Ext.app.ViewController',
    alias : 'controller.spenders',

    spenderMask : function () {
        var spenderLisd = this.lookupReference('spenderList')
        if (spenderLisd.isMasked()) {
            spenderLisd.unmask();
            this.fireViewEvent('spenderunmask', this);
        } else {
            spenderLisd.mask();
            this.fireViewEvent('spendermask', this);
        }
    },

    onAddSpender : function () {
        this.lookupReference('formAddSpender').fireEvent('onAddSpender');
        this.spenderMask();
    },

    onEditSpender : function (el, id) {
        this.lookupReference('formEditSpender').fireEvent('onEditSpender', id);
    },

    onAddSpend : function (el) {
        this.lookupReference('formAddSpend').fireEvent('onAddSpend', el.getSpender().getId());
        this.spenderMask();
    },

    onAdd : function () {
        this.spenderMask();
        this.onGetList();
    },

    onEdit : function (el, form, id) {
        this.onUpdate(id);
        this.spenderMask();
    },

    onSpend : function (el, form, spenderId, walletId) {
        this.onUpdate(spenderId);
        this.fireViewEvent('spend', this, walletId);
        this.spenderMask();
    },

    onUpdate : function (spenderId) {
        var spender = this.lookupReference('spender' + spenderId);
        Spenders.getItem(spenderId, function (result, event, success, options) {
            if (success) {
                spender.fireEvent('updatespender', this, result);
            } else {
                Ext.Msg.alert('Failed', result ? result.message : 'No response');
            }
        }, this);
    },

    onDelete : function (el, id) {
        this.spenderMask();
        this.onGetList(id);
    },

    onGetList : function (id) {
        var me = this;
        var spenderList = this.lookupReference('spenderList');
        var store = Ext.StoreManager.lookup('spenders');
        var firstLoad = true;
        spenderList.mask();

        if (id) {
            spenderList.remove(me.lookupReference('spender' + id));
        }

        if (store.count() == 0) {
            spenderList.removeAll();
            spenderList.add({
                xtype : 'spender',
                name : 'Add',
                iconCls : 'ic-add',
                handler : 'onAddSpender'
            });
            store.load();
        } else {
            store.reload();
        }

        store.on('load', function (store, records) {
            Ext.each(records, function (item) {
                if (!me.lookupReference('spender' + item.data.ID)) {
                    spenderList.add({
                        xtype : 'spender',
                        reference : 'spender' + item.data.ID,
                        spenderId : item.data.ID,
                        name : item.data.NAME,
                        iconCls : item.data.ICON,
                        spent : item.data.SPEND,
                        plspend : item.data.PL_SPEND,
                        handler : 'onAddSpend'
                    });
                }
            });
            spenderList.unmask();
        }, me);

    },

    cancel : function () {
        this.spenderMask();
    },

    selectIcon : function (el, btn) {
        this.fireViewEvent('selecticon', el);
    },

    onIconSelected : function (iconCls) {
        var form = this.lookupReference('formAddSpender');
        this.lookupReference('iconSelectBtn').setIconCls(iconCls);
        form.getForm().setValues({
            ICON : iconCls
        });
    }
});