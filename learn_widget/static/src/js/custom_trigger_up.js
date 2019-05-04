odoo.define('learn_widget.naming_bebas', function (require) {
    "use strict";
    var basic_fields = require('web.basic_fields');
    var AbstractField = require('web.AbstractField');

    var FieldEjaTemplate = basic_fields.FieldText.extend({

        events: _.extend({}, AbstractField.prototype.events, {
            'input': '_onInput',
            'change': '_onChange',
        }),

        _onInput: function (event) {
            var min=5; 
            var max=8;  
            var random =Math.floor(Math.random() * (+max - +min)) + +min;
            this.trigger_up('field_changed', {
                dataPointID: this.dataPointID,
                changes: {
                    notes: this.$el.val(),
                    line_ids: {
                        operation: 'CREATE',
                        data: {
                            'name': this.$el.val(), 
                            'quantity': random,
                        },
                    },
                },
            })
        },
        _onChange: function () {
            this._setValue(this.$el.val())
        },
    })

    var registry = require('web.field_registry');
    registry
        .add('field_trigger_up', FieldEjaTemplate)
});
