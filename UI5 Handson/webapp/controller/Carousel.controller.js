sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel'
], function(Controller, JSONModel) {
    'use strict';
    return Controller.extend("ux400.training.ux400handson.controller.Carousel", {
        onInit: function(){
            var oModel = new JSONModel();
            oModel.loadData("model/data.json");
            this.getView().setModel(oModel, "CarouselData");
        }
    })
});