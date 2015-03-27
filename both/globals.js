Anigiri = {
    /**
     * Global methods and variables for tasks regarding users.
     *
     * @global
     * @module Users
     */
    Users: {
        /**
         * Determines whether or not a user is currently logged into
         * this application.
         *
         * @global
         * @method isLoggedIn
         * @return {Boolean} The result of the evaluation.
         */
        isLoggedIn: function() {
            return !_.isNull(Meteor.user());
        },
        /**
         * Returns the current user ID.
         *
         * @global
         * @method getUserId
         * @return {String} The user ID.
         */
        getUserId: function() {
            return Meteor.userId();
        },
        /**
         * Given the Meteor user data, get the facebook user data, otherwise null.
         *
         * @global
         * @method getFacebookUserData
         * @param userData {Object} The Meteor user data.
         * @return {Object} The facebook user data.
         */
        getFacebookUserData: function(userData) {
            if (userData && userData.services && userData.services.facebook) {
                return userData.services.facebook;
            } else {
                return {};
            }
        },
        /**
         * Returns the Facebook portrait URL given the user"s facebook user ID.
         *
         * @global
         * @method getUserPortrait
         * @param fb_uid {Number} The user facebook id.
         * @param options {Object} The dimensions of the facebook portrait.
         * @return {String} The portrait URL. 
         */
        getUserPortrait: function(fb_uid, options) {
            var settings = $.extend({width:150,height:150},options);
            return "https://graph.facebook.com/"+fb_uid+"/picture?width="+settings.width+"&height="+settings.height;
        }
    }
};
