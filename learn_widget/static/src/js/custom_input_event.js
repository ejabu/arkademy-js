odoo.define('learn_widget.input_event', function (require) {
    "use strict";

    var basic_fields = require('web.basic_fields');
    var AbstractField = require('web.AbstractField');

    var FieldInputEvent = basic_fields.FieldChar.extend({
        
        events: _.extend({}, AbstractField.prototype.events, {
            'input': '_onInput',
            'change': '_onChange',
            'paste': '_onPaste',
        }),
        _onInput: function (event) {
            var value_inputan = this.$el.val()
            if (value_inputan == false || value_inputan == undefined){
                return
            }
            var value_tanpa_dash = value_inputan.replace(/-/g, "")
            var value_chunk = value_tanpa_dash.match(/.{1,4}/g);

            var new_value = value_chunk.join('-')
            this.$el.val(new_value)
        },
        _onChange: function () {
            this._setValue(this.$el.val())
        },
        _onPaste: function () {
            alert('Paste from Clipboard')
        },

    })

    // Tambah ke Registry Odoo
    var registry = require('web.field_registry');
    registry
        .add('field_input_event', FieldInputEvent)
});
