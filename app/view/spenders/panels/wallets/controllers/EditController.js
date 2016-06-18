Ext.define('App.view.spenders.panels.wallets.controllers.EditController', {
    extend : 'Ext.app.ViewController',
    alias : 'controller.editWallet',

    onEdit : function (id) {
        var form = this.getView();
        Wallets.getItem(id, function (result, event, success, options) {
            if (success) {
                form.getForm().setValues(result);
                if(result.IS_NEGATIVE == 'T') {
                    form.getForm().findField('IS_NEGATIVE').setValue(true);
                } else {
                    form.getForm().findField('IS_NEGATIVE').setValue(false);
                }
                this.lookupReference('iconSelectBtn').setIconCls(result.ICON);
            } else {
                Ext.Msg.alert('Failed', result ? result.message : 'No response');
            }
        }, this);
        form.show();
    },

    save : function () {
        var me = this;
        var form = this.getView();

        form.getForm().submit({
            success : function (form, action) {
                me.fireViewEvent('editwallet', me, action.result.id);
                me.getView().hide();
            },
            failure : function (form, action) {
                Ext.Msg.alert('Failed', action.result ? action.result.message : 'No response');
            }
        }, this);
    },

    deleteWallet : function () {
        var me = this;
        var form = this.getView();
        Ext.Msg.show({
            title:'Delete wallet?',
            message: 'Are you sure you want to delete this?',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function(btn) {
                if (btn === 'yes') {
                    Wallets.delete(form.getForm().findField('ID').getValue(), function (result, event, success, options) {
                        if (success) {
                            Ext.StoreManager.lookup('wallets').reload();
                            me.getView().hide();
                            me.fireViewEvent('deletewallet', form.getForm().findField('ID').getValue());
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
    },

    selectIcon : function (el) {
        this.fireViewEvent('onEditIcon', el);
    },

    onIconSelected : function (iconCls) {
        var form = this.getView();
        this.lookupReference('iconSelectBtn').setIconCls(iconCls);
        form.getForm().setValues({
            ICON : iconCls
        });
    }
});