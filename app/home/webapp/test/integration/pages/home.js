sap.ui.define([
    "sap/ui/test/Opa5"
], function (Opa5) {
    "use strict";

    return Opa5.createPageObjects({
        onTheHomePage: {
            assertions: {
                iShouldSeeTheHomePage: function () {
                    return this.waitFor({
                        controlType: "sap.m.Page",
                        success: function (aPages) {
                            Opa5.assert.ok(
                                aPages.length > 0,
                                "La page Home est affichée correctement."
                            );
                        },
                        errorMessage: "La page Home n'est pas affichée."
                    });
                },

                iShouldSeePlannerDashboardAccess: function () {
                    return this.waitFor({
                        controlType: "sap.m.Text",
                        check: function (aTexts) {
                            return aTexts.some(function (oText) {
                                var sText = oText.getText && oText.getText();
                                return sText && sText.indexOf("Planificateur") !== -1;
                            });
                        },
                        success: function () {
                            Opa5.assert.ok(
                                true,
                                "Un élément lié à l'espace planificateur est visible."
                            );
                        },
                        errorMessage: "Aucun élément lié à l'espace planificateur n'est visible."
                    });
                }
            }
        }
    });
});