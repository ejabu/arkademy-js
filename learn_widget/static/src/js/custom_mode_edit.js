odoo.define('learn_widget.edit_mode', function (require) {
    "use strict";

    "# Referensi "
    // "odoo/addons/sms/static/src/js/sms_widget.js line:69"
    // "odoo/addons/web/static/src/js/fields/basic_fields.js line:343"

    var basic_fields = require('web.basic_fields');

    var FieldEditMode = basic_fields.FieldChar.extend({
        className : 'o_text_blue o_text_italic',
        
        _renderEdit: function () {
            var self = this;
            this._super.apply(this, arguments);

            self.$el = self.$el.add($('<button onclick=\'alert("Awas ada BOM")\'>Click Me</button>'))
        },
    })

    // Tambah ke Registry Odoo
    var registry = require('web.field_registry');
    registry
        .add('field_edit_mode', FieldEditMode)
});
