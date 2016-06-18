Ext.define('App.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    destroy: function () {
        Ext.destroyMembers(this, 'menu');
        this.callParent();
    },

    onMenuClick: function (menu, item) {
        this.getView().setActiveTab(menu.items.indexOf(item) + 1);
    },

    onSwitchTool: function (e) {
        var menu = this.menu;
        if (!menu) {
            menu = this.getView().assistiveMenu;
            this.menu = menu = new Ext.menu.Menu(menu);
        }
        menu.showAt(e.getXY());
    }
});
