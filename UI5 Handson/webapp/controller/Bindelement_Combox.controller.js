sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel'
], function (Controller, JSONModel) {
    'use strict';
    return Controller.extend("ux400.training.ux400handson.controller.Bindelement_Combox", {
        onInit: function () {
            var oModel = new JSONModel();
            oModel.loadData("model/data.json");
            // this.getView().setModel(oModel, "Combox");
            this.getView().setModel(oModel);
        },
        onSelectionChange: function (oEvent) {
            var oItem = oEvent.getParameter("selectedItem");
            // var sPath = oItem.oBindingContexts.Combox.getPath();
            var sPath = oItem.getBindingContext().getPath();
            var oList = this.getView().byId("idList");
            oList.bindElement(sPath);
        }
    })

});