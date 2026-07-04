sap.ui.define([
    "sap/ui/test/Opa5"
], function (Opa5) {
    "use strict";

    return Opa5.createPageObjects({
        onTheAppPage: {
            assertions: {
                iShouldSeeTheApp: function () {
                    return this.waitFor({
                        controlType: "sap.m.App",
                        success: function (aApps) {
                            Opa5.assert.ok(
                                aApps.length > 0,
                                "L'application Home est bien chargée."
                            );
                        },
                        errorMessage: "L'application Home n'est pas chargée."
                    });
                }
            }
        }
    });
});