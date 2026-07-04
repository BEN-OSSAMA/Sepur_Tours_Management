sap.ui.define([
    "sap/ui/test/opaQunit",
    "home/test/integration/arrangements/Startup",
    "home/test/integration/pages/App",
    "home/test/integration/pages/home"
], function (opaTest, Startup) {
    "use strict";

    QUnit.module("Navigation Home");

    opaTest("L'application Home doit s'ouvrir correctement pour un planificateur", function (Given, When, Then) {
        Given.iStartMyApp();

        Then.onTheAppPage.iShouldSeeTheApp();
        Then.onTheHomePage.iShouldSeeTheHomePage();
        Then.onTheHomePage.iShouldSeePlannerDashboardAccess();

        Then.iTeardownMyApp();
    });
});