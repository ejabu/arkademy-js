from odoo import models, fields, api

class WidgetOrderLine(models.Model):
    _name = 'widget.order.line'

    name = fields.Char(string='Name')
    quantity = fields.Integer(string='Quantity')
    price = fields.Integer(string='Onchange')
    price_depends = fields.Integer(string='Compute', related="quantity", readonly=True)


    order_id = fields.Many2one(
        comodel_name='widget.order',
        string='Widget'
        )

    @api.onchange('quantity')
    def get_price(self):
        self.price = self.quantity * 1000
