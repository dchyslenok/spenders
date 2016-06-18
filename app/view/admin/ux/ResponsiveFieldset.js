Ext.define('App.view.admin.ux.ResponsiveFieldset', {
	extend: 'Ext.form.FieldSet',
	alias: ['widget.responsivefieldset'],
	initComponent: function() {
		Ext.apply(this, {
			plugins: 'responsive',
			responsiveConfig: {
				wide: {
					responsive: 'landscape'
				},
				tall: {
					responsive: 'portrait'
				}
			},
			defaults: {
				anchor: '100%'
			},
			listeners: {
				resize: {
					scope: this,
					fn: function (el) {
						if ((!Ext.isEmpty(el.items) && Ext.isArray(el.items.items)) && el.items.items.length > 0) {
							if (el.responsive != 'landscape') {
								Ext.each(el.items.items, function (item) {
									if (!Ext.isEmpty(item.labelEl)) {
										if (Ext.isDefined(item.labelModif) && !item.labelModif) {
											return false;
										}
										item.labelEl.removeCls('x-form-item-label-left');
										item.labelEl.addCls('x-form-item-label-top');
										Ext.apply(item, {
											labelAlign: item.labelAlign == 'top'
										});
									}
								});
							}
							if (el.responsive != 'portrait') {
								Ext.each(el.items.items, function (item) {
									if (!Ext.isEmpty(item.labelEl)) {
										if (Ext.isDefined(item.labelModif) && !item.labelModif) {
											return false;
										}
										item.labelEl.removeCls('x-form-item-label-top');
										item.labelEl.addCls('x-form-item-label-left');
										Ext.apply(item, {
											labelAlign: item.labelAlign == 'left'
										});
									}
								});
							}
						}
						this.updateLayout();
					}
				}
			}
		});
		this.callParent(arguments);
	}
});
