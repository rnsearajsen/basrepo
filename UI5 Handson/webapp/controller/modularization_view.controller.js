sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../Formatter/MessageManager"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageManager) {
        "use strict";

        return Controller.extend("ux400.training.ux400handson.controller.modularization_view", {
            onInit: function () {

            }, //End of onInit
            onPress: function () {
                MessageManager.reportSuccess("button was pressed", "success");
            } //End of onPress
        });
    });
