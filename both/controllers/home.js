HomeController = AppController.extend({
    template: "homePage",
    data: {}
});
if (Meteor.isClient) {
    Template.homePage.rendered = function() {
        HomeController.element = $("#home-page");

        // go through each select dropdown and initialize
        HomeController.element.find("select").each(function() {
            var $select = $(this);

            console.log($select);

            $select.chosen({
                width: "250px"
            });
        });
    }
}
