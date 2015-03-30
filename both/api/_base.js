/**
 * Constructs an API model.
 *
 * @method APIModelClass
 * @param name {String} The name of the API model.
 * @param description {String} An appropriate description for the API model.
 * @param methods {Array} A list of methods usable by the API model.
 */
APIModelClass = function(name, description, methods) {
    this.name = _.defaults(name, null);
    this.description = _.defaults(description, null);
    this.methods = _.defaults(methods, []);
};
APIModel = function(name, description, methods) {
    return new APIModelClass(name, description, methods);
}
/**
 * Constructs an API method.
 *
 * @method APIMethodClass
 * @param name {String} The name of the API method.
 * @param description {String} An appropriate description for the API method.
 * @param parameters {Array} A list of parameters required by the API method.
 * @param payload {Object} An optional payload to indicate return value from the request.
 */
APIMethodClass = function(name, description, parameters, payload) {
    this.name = _.defaults(name, null);
    this.description = _.defaults(description, null);
    this.parameters = _.defaults(parameters, []);

    if (!_.isUndefined(payload)) {
        this.payload = payload;
    }
};
APIMethod = function(name, description, parameters) {
    return new APIMethodClass(name, description, parameters);
}
/**
 * Constructs an API parameter.
 *
 * @method APIParameterClass
 * @param name {String} The name of the API parameter.
 * @param type {String} A string qualifying what type this parameter value will be.
 * @param description {String} An appropriate description for the API parameter.
 * @param optional {Array} A flag indicating whether or not this parameter is optional (defaults to false).
 */
APIParameterClass = function(name, type, description, optional) {
    this.name = _.defaults(name, null);
    this.type = _.defaults(type, null);
    this.description = _.defaults(description, null);
    this.optional = _.defaults(optional, false);
};
APIParameter = function(name, type, description, optional) {
    return new APIParameterClass(name, type, description, optional);
}
/**
 * Constructs an API payload.
 *
 * @method APIPayloadClass
 * @param type {String} A string qualifying what type this payload value will be.
 * @param description {String} An appropriate description for the API payload.
 * @param optional {Array} A flag indicating whether or not this payload is optional (defaults to false).
 */
APIPayloadClass = function(name, type, description, optional) {
    this.type = _.defaults(type, null);
    this.description = _.defaults(description, null);
};
APIPayload = function(name, type, description, optional) {
    return new APIPayloadClass(type, description);
}
// This is the list of API Models that we will be
// building over the subsequent files.
API_MODELS = [];
