Ext.define('App.view.main.Main', {
    extend : 'Ext.tab.Panel',
    xtype : 'app-main',
    requires : [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'App.view.main.MainController',
        'App.view.main.MainModel',
        'App.view.spenders.Index'
    ],
    controller : 'main',
    viewModel : 'main',
    ui : 'navigation',
    tabBarHeaderPosition : 1,
    activeTab : 0,
    titleRotation : 0,
    tabRotation : 0,
    // cls : 'exec-menu-navigation',
    header : {
        layout : {
            align : 'stretchmax'
        },
        title : {
            bind : {
                text : '{name}'
            },
            flex : 0
        },
        iconCls : 'fa-credit-card'
    },
    tabBar : {
        flex : 1,
        layout : {
            align : 'stretch',
            overflowHandler : 'none'
        }
    },
    responsiveConfig : {
        tall : {
            headerPosition : 'top'
        },
        wide : {
            headerPosition : 'left'
        }
    },
    defaults: {
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    margin : '7 0 0 0',
                    iconAlign: 'left',
                    textAlign: 'left',
                    flex: 0
                },
                tall: {
                    margin : '0 7 0 0',
                    iconAlign: 'top',
                    textAlign: 'center',
                    flex: 1
                },
                // 'width < 768 && tall': {
                //     visible: false
                // },
                // 'width >= 768': {
                //     visible: true
                // }
            }
        }
    },
    items : [{
        xtype : 'myspenders'
    }, {
        title : 'Statistics',
        ui : 'main',
        iconCls : 'fa-bar-chart',
        layout : 'fit',
        defaults: {
            margin: 10
        },
        items : {
            xtype : 'panel',
            title : 'Statistics - in developing',
            ui : 'material-z1'
        }
    }, {
        title : 'Reports',
        ui : 'main',
        iconCls : 'fa-file',
        layout : 'fit',
        defaults: {
            margin: 10
        },
        items : {
            xtype : 'panel',
            title : 'Reports - in developing',
            ui : 'material-z1'
        }
    }]
    // ,
    // assistiveMenu : {
    //     items : [ {
    //         text : 'Spenders',
    //         iconCls : 'fa-shopping-cart'
    //     }, {
    //         text : 'Statistics',
    //         iconCls : 'fa-bar-chart'
    //     }, {
    //         text : 'Reports',
    //         iconCls : 'fa-file'
    //     }],
    //     listeners : {
    //         click : 'onMenuClick'
    //     }
    // }
});
