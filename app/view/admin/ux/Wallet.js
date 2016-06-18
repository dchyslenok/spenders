Ext.define('App.view.admin.ux.Wallet', {
    extend : 'Ext.container.Container',
    alias : 'widget.wallet',
    width : 80,
    height : 115,
    layout : {
        type : 'vbox',
        align : 'center'
    },
    listeners : {
        updatewallet : function (el, record) {
            this.setLabel(record.NAME + '(' + record.TYPE + ')');
            this.setBalance(record.BALANCE);
            this.setIcon(record.ICON);
        },
        upSpend : function (el, newValue) {
            this.setBalance(newValue);
        }
    },
    constructor : function(config) {
        this.walletId = config.walletId;
        this.getWalletId = function () {
            return this.walletId;
        }
        Ext.apply(this, config || {});

        var me = this
        var api = function () {
            return {
                getId : function () {
                    return me.getWalletId();
                },
                getName : me.getLabel
            }
        }

        me.setIcon = function(icon) {
            me.getComponent('walletBtn').setIconCls(icon);
        }

        me.getLabel = function() {
            return me.getComponent('label').text;
        }
        me.setLabel = function(value) {
            me.getComponent('label').update(value);
        }

        me.getBalance = function() {
            return me.getComponent('balance').value;
        }

        me.setBalance = function(value) {
            var text = me.getComponent('balance');
            text.update(value);
            text.value = value;
        }

        me.spend = function(value) {
            var currentValue = me.getBalanc();
            me.setBalance(+currentValue + value);
        }

        this.items = [{
            xtype : 'label',
            itemId : 'label',
            text : this.label
        }, {
            xtype : 'button',
            itemId : 'walletBtn',
            ui : 'wallet',
            iconCls : this.iconCls,
            scale : 'large',
            width : 55,
            height : 55,
            margin : 5,
            getWallet: api,
            handler : this.handler
        }, {
            xtype : 'label',
            itemId : 'balance',
            text : this.balance,
            value : this.balance
        }];

        this.callParent(arguments);
    },

    afterRender : function() {
        this.callParent();
    }
});
