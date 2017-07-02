# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from book.models import Book
from users.models import User


class Order(models.Model):
    # for user
    book = models.ForeignKey(Book)
    user = models.ForeignKey(User)
    create_at = models.DateField(auto_now_add=True)
    price = models.IntegerField()
