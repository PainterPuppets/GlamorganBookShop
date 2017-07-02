# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from book.models import Book


class BookAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'discount', 'introduce', 'count', 'author')

admin.site.register(Book, BookAdmin)