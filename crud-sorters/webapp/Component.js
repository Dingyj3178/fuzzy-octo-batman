sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/model/resource/ResourceModel",
  "sap/ui/model/json/JSONModel",
  "sapui5/demo/mvcapp/model/AppModel",
  "sap/ui/Device"
	], function (UIComponent, ResourceModel, JSONModel, AppModel, Device) {
  "use strict";

	return UIComponent.extend("sapui5.demo.mvcapp.Component", {

		metadata : {
			"rootView": "sapui5.demo.mvcapp.view.App",
			"dependencies": {
				"minUI5Version": "1.28.0",
				"libs": [ "sap.ui.core", "sap.m" ]
			},

			"config": {
				"serviceUrl": "/destinations/learnui5",
				"i18nBundle": "sapui5.demo.mvcapp.i18n.i18n"
			},

			"routing": {
				"config": {
					"routerClass": "sap.m.routing.Router",
					"viewType": "XML",
					"viewPath": "sapui5.demo.mvcapp.view",
					"controlId": "app",
					"controlAggregation": "pages",
					"bypassed": {
						"target": "notFound"
					}
				},

				"routes": [
					{
						"pattern": "",
						"name": "master",
						"target": "master"
					},
					{
						"pattern": "detail/{id}",
						"name": "detail",
						"target": "detail"
					},
					{
						"pattern": "edit/:id:",
						"name" : "edit",
						"target" : "edit"
					}
				],

				"targets": {
					"master": {
						"viewName": "Master",
						"viewLevel": 1
					},
					"detail": {
						"viewName": "Detail",
						"viewLevel": 2
					},
					"notFound": {
						"viewName": "NotFound",
						"viewId": "notFound"
					},
					"edit": {
						"viewName": "Edit",
						"viewId": "edit",
						"viewLevel": 3
					}
				}
			}
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * In this function, the resource and application models are set and the router is initialized.
		 * @public
		 * @override
		 */
        init : function () {
          var mConfig = this.getMetadata().getConfig();
          // call the base component's init function
          UIComponent.prototype.init.apply(this, arguments);
          
          // set the internationalization model
          this.setModel(new ResourceModel({
            bundleName : mConfig.i18nBundle
          }), "i18n");
        
          // create the device model here
          var oModel = new JSONModel(Device);
          oModel.setDefaultBindingMode("OneWay");
          this.setModel(oModel, "device");
        
			oModel = new AppModel("/destinations/learnui5/suppliers?_embed=products");
			this.setModel(oModel);
          // create the views based on the url/hash
			this.getRouter().initialize();
        },


		/**
		 * In this function, the rootView is initialized and stored.
		 * @public
		 * @override
		 * @returns {sap.ui.mvc.View} the root view of the component
		 */
		createContent : function() {
			// call the base component's createContent function
			var oRootView = UIComponent.prototype.createContent.apply(this, arguments);
			return oRootView;
		}
	});
});