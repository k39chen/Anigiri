(function($) {
    $.fn.getAttributes = function() {
        var attributes = {};

        if (this.length) {
            $.each(this[0].attributes, function(index,attr) {
                attributes[attr.name] = attr.value;
            });
        }
        return attributes;
    };
    $.fn.loadingSpinner = function(operation) {
        if (operation === "open") {
            $(this).prepend("<div class='loading-spinner'><i class='fa fa-spin fa-spinner'></i></div>");
        }
        if (operation === "close") {
            $(this).find("> .loading-spinner").remove();
        }
    };
    $.fn.prettyPrint = function(jsonObj) {
        var jsonLine = /^( *)("[\w]+": )?("[^"]*"|[\w.+-]*)?([,[{])?$/mg;
        $(this).html(JSON.stringify(jsonObj, null, 4)
            .replace(/&/g, '&amp;').replace(/\\"/g, '&quot;')
            .replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(jsonLine, replacer));

        function replacer(match, pIndent, pKey, pVal, pEnd) {
            var key = '<span class=json-key>';
            var val = '<span class=json-value>';
            var str = '<span class=json-string>';
            var r = pIndent || '';
            if (pKey)
                r = r + key + pKey.replace(/[": ]/g, '') + '</span>: ';
            if (pVal)
                r = r + (pVal[0] == '"' ? str : val) + pVal + '</span>';
            return r + (pEnd || '');
        }
    };
})(jQuery);
