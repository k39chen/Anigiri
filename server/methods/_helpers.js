/*========================================================================*
 * ERROR METHODS
 *========================================================================*/
throwError = function(type, message) {
    console.log("["+type+"] "+message);
    throw new Meteor.Error(type, message);
};
/*========================================================================*
 * PARAMETER VALIDATION
 *========================================================================*/
validateParameters = function(params,expected) {
    // validate the parameters before we make any requests
    if (_.isEmpty(params)) {
        throwError("parameters-required", "Must specify parameters for this request.");
    }
    _.each(expected, function(value,key) {
        if (_.isEmpty(params[value])) {
            throwError("invalid-parameter", "The parameter `"+value+"` must be specified.");
        }
    });
};
/*========================================================================*
 * OUTPUT HELPERS
 *========================================================================*/
printHeader = function(method, params) {
    printBlockSeparator();
    console.log("API Request: ",method);
    console.log("Parameters: ", params);
    printSeparator();
};
printBlockSeparator = function() {
    console.log("=====================================================");
};
printSeparator = function() {
    console.log("-----------------------------------------------------");
};
