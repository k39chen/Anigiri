/**
 * Helper to indicate whether or not a user is currently
 * logged into this application.
 *
 * @method isLoggedIn
 * @return {Boolean} The result of the evaluation.
 */
Template.registerHelper("isLoggedIn", function() {
    return Anigiri.Users.isLoggedIn();
});
/**
 * Helper to get the currently logged in user name.
 *
 * @method userName
 * @return {String} The name of the user.
 */
Template.registerHelper("userName", function() {
    var user = Meteor.user();
    var fb = Anigiri.Users.getFacebookUserData(user);
    return fb.name;
});
/**
 * Helper to get the currently logged in user portrait.
 *
 * @method userPortrait
 * @return {String} The portrait url of the user.
 */
Template.registerHelper("userPortrait", function() {
    var user = Meteor.user();
    var fb = Anigiri.Users.getFacebookUserData(user);
    return Anigiri.Users.getUserPortrait(fb.id);
});
