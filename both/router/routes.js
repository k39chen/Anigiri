Router.route("/", {
    name: "home",
    controller: HomePageController
});
/*========================================================================*
 * MAIN PAGES
 *========================================================================*/
Router.route("/profile", {
    name: "profile",
    controller: ProfilePageController
});
Router.route("/gallery", {
    name: "gallery",
    controller: GalleryPageController
});
Router.route("/friends", {
    name: "friends",
    controller: FriendsPageController
});
Router.route("/recommendations", {
    name: "recommendations",
    controller: RecommendationsPageController
});
/*========================================================================*
 * DISCOVER PAGES
 *========================================================================*/
Router.route("/featured", {
    name: "featured",
    controller: FeaturedPageController
});
Router.route("/trending", {
    name: "trending",
    controller: TrendingPageController
});
Router.route("/community", {
    name: "community",
    controller: CommunityPageController
});
Router.route("/music", {
    name: "music",
    controller: MusicPageController
});
/*========================================================================*
 * ADMIN PAGES
 *========================================================================*/
Router.route("/settings", {
    name: "settings",
    controller: SettingsPageController
});
Router.route("/controlPanel", {
    name: "controlPanel",
    controller: ControlPanelPageController
});
