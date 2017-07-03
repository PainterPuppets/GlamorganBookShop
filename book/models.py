# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models


class Book(models.Model):
    # for user
    name = models.CharField(max_length=255, unique=True)
    price = models.IntegerField()
    discount = models.IntegerField(default=1)
    introduce = models.TextField(blank=True)
    count = models.IntegerField(default=0)
    author = models.CharField(max_length=255)

    def __str__(self):
        return self.name

    def __unicode__(self):
        return u'%s' % self.__str__()
