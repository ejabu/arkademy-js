from odoo import models, fields, api

class WidgetOrder(models.Model):
    _name = 'widget.order'

    name = fields.Char(string='Name')
    notes = fields.Char(string='Notes')

    line_ids = fields.One2many(
        comodel_name='widget.order.line',
        inverse_name='order_id',
        string='Line',
        )

    field_1 = fields.Char(string='Field 1', default='content')
    field_2 = fields.Char(string='Field 2', default='content')
    field_3 = fields.Char(string='Field 3', default='content')
    field_4 = fields.Char(string='Field 4')
    field_5 = fields.Char(string='Field 5', default='content')
