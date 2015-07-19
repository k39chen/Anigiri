/*========================================================================*
 * HTTP HELPERS
 *========================================================================*/
sendRequest = function(params) {
    var startTime = moment();
    var duration = null;
    var params = _.extend({
        contentKey: "content",
        type: "GET",
        requestUrl: null,
        requestParams: null,
        processResponse: _.noop
    }, params);
    var result = {
        status: null,
        duration: null,
        data: null
    };
    // send the request to Anime News Network
    var response = HTTP.call(params.type, params.requestUrl, params.requestParams);
    if (!_.isNull(params.contentKey)) {
        response = response[params.contentKey];
    }
    // if there's nothing to parse then return an empty response
    if (_.isEmpty(response)) {
        duration = Helpers.getDuration(startTime,moment());
        result = {
            status: "ERROR",
            duration: duration,
            data: null
        };
    } else {
        duration = Helpers.getDuration(startTime,moment());
        result = {
            status: "SUCCESS",
            duration: duration,
            data: params.processResponse(response) || null
        };
    }
    console.log("Done in",duration);
    return result;
};
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
