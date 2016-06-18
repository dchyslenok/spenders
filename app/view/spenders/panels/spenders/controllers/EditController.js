Ext.define('App.view.spenders.panels.spenders.controllers.EditController', {
    extend : 'Ext.app.ViewController',
    alias : 'controller.editSpender',

    onEdit : function (id) {
        var form = this.getView();
        Spenders.getItem(id, function (result, event, success, options) {
            if (success) {
                form.getForm().setValues(result);
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
                me.fireViewEvent('editspender', me, action.result.id);
                me.getView().hide();
            },
            failure : function (form, action) {
                Ext.Msg.alert('Failed', action.result ? action.result.message : 'No response');
            }
        }, this);
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