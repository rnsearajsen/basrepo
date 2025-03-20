sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/Device'
], function (Controller, Device) {
    'use strict';
    return Controller.extend("ux400.training.ux400handson.controller.ResponsiveGridLayout", {
        onInit: function () {
            // apply COMPACT density if touch  is not supported, the std. COZY design otherwise
            this.getView().addStyleClass(Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact");
        }
    })
});