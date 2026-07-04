sap.ui.define([
    "sap/ui/test/Opa5"
], function (Opa5) {
    "use strict";

    return Opa5.extend("home.test.integration.arrangements.Startup", {
        iStartMyApp: function () {
            var oUser = {
                ID: "user-planner",
                email: "planner@sepur.com",
                username: "planner",
                fullName: "Planificateur SEPUR",
                role: "PLANIFICATEUR",
                active: true
            };

            localStorage.setItem("currentUser", JSON.stringify(oUser));
            localStorage.setItem("sepurUser", JSON.stringify(oUser));
            localStorage.setItem("sepur.user", JSON.stringify(oUser));

            return this.iStartMyUIComponent({
                componentConfig: {
                    name: "home"
                },
                hash: ""
            });
        },

        iTeardownMyApp: function () {
            localStorage.removeItem("currentUser");
            localStorage.removeItem("sepurUser");
            localStorage.removeItem("sepur.user");

            return this.iTeardownMyUIComponent();
        }
    });
});