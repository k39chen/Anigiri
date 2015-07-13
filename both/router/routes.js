Router.route("/", {
    name: "home",
    controller: HomePageController
});
/*========================================================================*
 * PAGES
 *========================================================================*/
Router.route("/explore", {
    name: "explore",
    controller: ExplorePageController
});
Router.route("/gallery", {
    name: "gallery",
    controller: GalleryPageController
});
Router.route("/social", {
    name: "social",
    controller: SocialPageController
});
Router.route("/controlPanel", {
    name: "controlPanel",
    controller: ControlPanelPageController
});
