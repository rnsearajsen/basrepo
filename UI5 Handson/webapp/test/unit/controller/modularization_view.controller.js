/*global QUnit*/

sap.ui.define([
	"ux400training/ux400_handson/controller/modularization_view.controller"
], function (Controller) {
	"use strict";

	QUnit.module("modularization_view Controller");

	QUnit.test("I should test the modularization_view controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
