# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from book.models import Book


class Order(models.Model):
    # for user
    id = models.CharField('订单号', max_length=255, unique=True)
    book = models.ForeignKey(Book)
    user
    create_at
    price
    price = models.IntegerField()
    discount = models.IntegerField(default=0)
    introduce = models.TextField(blank=True)
    count = models.IntegerField(default=0)
    author = models.CharField(max_length=255)

    def __str__(self):
        return self.name

    def __unicode__(self):
        return u'%s' % self.__str__()
