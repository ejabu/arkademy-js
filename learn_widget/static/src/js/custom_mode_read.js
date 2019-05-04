odoo.define('learn_widget.read_mode', function (require) {
    "use strict";

    var basic_fields = require('web.basic_fields');

    var FieldReadMode = basic_fields.FieldChar.extend({
        className : 'o_text_bold',
        
        _renderReadonly: function () {
            this.$el.html("<div>B O M</div>");
        },
    })

    // Tambah ke Registry Odoo
    var registry = require('web.field_registry');
    registry
        .add('field_read_mode', FieldReadMode)
});
