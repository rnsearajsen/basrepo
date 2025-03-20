/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ux400training/ux400_handson/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
