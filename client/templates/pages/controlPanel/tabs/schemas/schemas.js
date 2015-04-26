/*========================================================================*
 * POST-RENDER BEHAVIOUR
 *========================================================================*/
Template.controlPanelSchemasTab.rendered = function() {
    var $page = Page.ControlPanel.element;
    var $tab = $page.find("#tab-schemas");
    var $schemas = $tab.find("select.schemas-list");

    // attach the widgets on this tab
    Widgets.attach($tab);

    // set default values for the dropdowns
    $schemas.val("user").trigger("change");
};
/*========================================================================*
 * EVENT HANDLERS
 *========================================================================*/
Template.controlPanelSchemasTab.events({
    "change select.schemas-list": function(ev, template) {
        var $el = $(ev.target);
        var val = $el.val();
        var data = Schemas[val];

        $el.trigger("chosen:updated");
        Session.set("controlPanelSchemasValue", val || null);
        Session.set("controlPanelSchemasData", data || null);
    }
});
/*========================================================================*
 * TEMPLATE HELPERS
 *========================================================================*/
Template.controlPanelSchemasTab.helpers({
    schemas: function() {
        var schemaKeys = _.keys(Schemas);
        schemaKeys = _.sortBy(schemaKeys, function(schema) {
            return schema;
        });
        var schemas = [];
        _.each(schemaKeys, function(key) {
            schemas.push({ value: key, name: key });
        });
        return schemas;
    },
    table: function() {
        var schema = Session.get("controlPanelSchemasData");

        if (_.isEmpty(schema)) return "";

        var keys = schema._firstLevelSchemaKeys;
        var data = {};

        // go through each first-level schema key and get the attribute data
        _.each(keys, function(key) {
            data[key] = schema._schema[key];
        });
        // get a list of all the columns
        var columns = {"Key": true};

        // go through each schema attribute and get the info provided.
        _.each(data, function(attribute, key) {
            var keys = _.keys(attribute);

            _.each(keys, function(key) {
                columns[key] = true;
            })
        });
        // construct the table header markup
        var $header = $("<thead/>");
        var $headerRow = $("<tr/>").appendTo($header);
        _.each(columns, function(flag, col) {
            $headerRow.append($("<th>"+col+"</th>"));
        });
        // construct the table body markup
        var $body = $("<tbody/>");
        _.each(data, function(attribute, key) {
            var $row = $("<tr/>").appendTo($body);

            _.each(columns, function(flag, col) {
                var cell = attribute[col];

                if (col === "Key") cell = key;
                if (_.isObject(cell)) cell = JSON.stringify(cell);

                if (_.isUndefined(cell)) {
                    $row.append("<td class='value-undefined'></td>");
                } else if (_.isNull(cell)) {
                    $row.append("<td class='value-null'>null</td>");
                } else {
                    $row.append("<td>"+cell+"</td>");
                }
            });
        });
        return "<thead>" + $header.html() + "</thead>" +
               "<tbody>" + $body.html() + "</tbody>";
    }
});
