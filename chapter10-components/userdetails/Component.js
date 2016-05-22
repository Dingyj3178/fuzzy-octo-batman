sap.ui.define([
	"sap/ui/core/UIComponent"
], function(UIComponent) {
	"use strict";

	return UIComponent.extend("sapui5.demo.userdetails.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
<<<<<<< Upstream, based on 4c10f349f24ee69509b2bfd86b175ddd8c4f6f54
			
=======
			this.getRouter().initialize();
			debugger;
>>>>>>> 2c6241d chapter 10 samples for fragments and component
		}
	});

});