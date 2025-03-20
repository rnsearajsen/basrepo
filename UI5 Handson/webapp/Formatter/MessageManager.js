sap.ui.define([
    'sap/m/MessageBox',    
    '../Formatter/Formatter'
], function(MessageBox, Formatter) {
    'use strict';
    return {
        reportSuccess: function(sMsg, sTitle){
          MessageBox.show(
            Formatter.capitalizeFirstLetter(sMsg),
            {
                title: Formatter.capitalizeFirstLetter(sTitle)
            }
          );
        }
    }
});