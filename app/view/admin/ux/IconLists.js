/**
 * This view is an example list of people.
 */
Ext.define('App.view.admin.ux.IconLists', {
    extend : 'Ext.panel.Panel',
    xtype : 'iconlist',
    title : 'Select icon',
    ui : 'material-z1',
    hidden : true,
    layout : {
        type : 'responsivecolumn'
    },
    listeners : {},
    constructor : function (config) {
        var iconList = [
            'ic-sign-out',
            'ic-nodeLocked',
            'ic-nodeClosed',
            'ic-nodeOpened',
            'ic-redirectIcon',
            'ic-contentIcon',
            'ic-linkIcon',
            'ic-generatedIcon',
            'ic-httpsIcon',
            'ic-exit',
            'ic-bumpLogo',
            'ic-actions',
            'ic-edit',
            'ic-add',
            'ic-view',
            'ic-system',
            'ic-export',
            'ic-copy',
            'ic-paste',
            'ic-del',
            'ic-purge',
            'ic-reload',
            'ic-reset',
            'ic-upload',
            'ic-download',
            'ic-compress',
            'ic-quicklinks',
            'ic-browse',
            'ic-link',
            'ic-print',
            'ic-playback',
            'ic-tablerows',
            'ic-save',
            'ic-save_exit',
            'ic-close',
            'ic-stop',
            'ic-plus',
            'ic-minus',
            'ic-find',
            'ic-checked',
            'ic-unchecked',
            'ic-whitelist',
            'ic-sync',
            'ic-preferences',
            'ic-pdf',
            'ic-youtubeIcon'
        ];
        this.items = [{
            xtype : 'hiddenfield',
            name : 'CALL'
        }];
        var me = this;
        me.callForm = 'tests';

        me.getCallForm = function () {
            return me.callForm;
        };

        me.setCallForm = function (callForm) {
            me.callForm = callForm;
        };

        Ext.each(iconList, function (item) {
            me.items.push({
                xtype : 'button',
                iconCls : item,
                ui : 'spender',
                width : 50,
                height : 50,
                scale : 'medium',
                handler : 'iconSelected'
            });
        });
        Ext.apply(this, config);
        this.callParent(arguments);
    }
});
