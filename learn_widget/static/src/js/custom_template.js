odoo.define('learn_widget.field_template', function (require) {
    "use strict";

    var AbstractField = require('web.AbstractField');

    var FieldTemplate = AbstractField.extend({
        template: 'FieldCustom',

        events: _.extend({}, AbstractField.prototype.events, {
            'change': '_onChange',
            'click .btn': '_buttonClicked',
        }),

        // Kenapa perlu events onchange untuk ngambil Value 
        // dari Input Box ?
        // Karena Widget ini di 'wrap' oleh div .widget_container
        _onChange: function () {
            this._setValue(this.$el.find('input').val())
        },
        _buttonClicked: function () {
            alert("Awas ada BOM")
        },

    })
    // Tambah ke Registry Odoo
    var registry = require('web.field_registry');
    registry
        .add('field_template', FieldTemplate)
});
