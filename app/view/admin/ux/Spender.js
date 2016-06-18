Ext.define('App.view.admin.ux.Spender', {
    extend : 'Ext.container.Container',
    alias : 'widget.spender',
    width : 80,
    height : 115,
    layout : {
        type : 'vbox',
        align : 'center'
    },
    listeners : {
        updatespender : function (el, record) {
            this.setName(record.NAME);
            this.setSpent(record.SPEND);
            this.setPlSpent(record.PL_SPEND);
            this.setIcon(record.ICON);
        }
    },
    constructor : function(config) {
        this.spenderId = config.spenderId;
        this.getSpenderId = function () {
            return this.spenderId;
        };

        Ext.apply(this, config || {});
        var me = this;
        var api = function () {
            return {
                getId : function () {
                    return me.spenderId;
                }
            }
        };

        me.updateLabelCls = function() {
            var spent = this.getComponent('spent');
            var plSpent = this.getComponent('plSpent');

            if (spent.value < ((plSpent.value / 100) * 60)) {
                spent.addCls('labelGreen');
            } else {
                spent.removeCls('labelGreen');
                if (spent.value >= ((plSpent.value / 100) * 60) && (+spent.value < +plSpent.value)) {
                    spent.addCls('labelOrange');
                } else {
                    spent.removeCls('labelOrange');
                    if (spent.value >= plSpent.value) {
                        spent.addCls('labelRed');
                    } else {
                        spent.removeCls('labelRed');
                    }
                }
            }
        };

        me.setIcon = function(icon) {
            me.getComponent('spenderBtn').setIconCls(icon);
        };

        me.getName = function() {
            return me.getComponent('name').text;
        };

        me.setName = function(value) {
            me.getComponent('name').update(value);
        };

        me.getSpent = function() {
            return me.getComponent('spent').value;
        };

        me.setSpent = function(value) {
            var text = me.getComponent('spent');
            text.update(value);
            text.value = value;
            me.updateLabelCls();
        };

        me.getPlSpent = function() {
            return me.getComponent('plSpent').value;
        };

        me.setPlSpent = function(value) {
            var text = me.getComponent('plSpent');
            text.update(value);
            text.value = value;
        };

        this.items = [{
            itemId : 'name',
            xtype : 'label',
            text : this.name,
            maxWidth : 55
        }, {
            itemId : 'spenderBtn',
            xtype : 'button',
            ui : 'spender',
            iconCls : this.iconCls,
            scale : 'large',
            width : 55,
            height : 55,
            margin : 5,
            getSpender : api,
            handler : this.handler
        }, {
            itemId : 'spent',
            xtype : 'label',
            text : this.spent,
            value : this.spent
        }, {
            itemId : 'plSpent',
            xtype : 'label',
            text : this.plspend,
            value : this.plspend
        }];

        this.callParent(arguments);
    },

    afterRender : function() {
        this.callParent();
        this.updateLabelCls();
    }
});
