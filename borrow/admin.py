# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from borrow.models import Borrow


class BorrowAdmin(admin.ModelAdmin):
    list_display = ('user', 'book', 'status', 'create_at')

admin.site.register(Borrow, BorrowAdmin)