/**
 * The current user login data.
 *
 * @publication userData
 * @param userId {String} The user ID. Defaults to currently logged in user.
 */
Meteor.publish("userData", function(userId){
    userId = userId !== undefined ? userId : this.userId;
    return Meteor.users.find(
        {_id: userId},
        {fields: {services: 1}}
    );
});
