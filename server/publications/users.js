/**
 * The current user login data.
 *
 * @publication userData
 * @param userId {String} The user ID. Defaults to currently logged in user.
 */
Meteor.publish("userStatus", function(){
    return Meteor.users.find(
        {"status.online": true},
        {
            fields: {
                services: 1,
                status: 1
            }
        }
    );
});
/**
 * The current user login data.
 *
 * @publication userData
 * @param userId {String} The user ID. Defaults to currently logged in user.
 */
Meteor.publish("userData", function(userId){
    userId = !_.isUndefined(userId) ? userId : this.userId;
    return Meteor.users.find(
        {_id: userId},
        {
            fields: {
                services: 1,
                status: 1
            }
        }
    );
});
