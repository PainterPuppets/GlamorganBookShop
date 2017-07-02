# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from order.models import Order

class OrderAdmin(admin.ModelAdmin):
    list_display = ('book', 'user', 'price')

admin.site.register(Order, OrderAdmin)
