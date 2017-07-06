# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models


class Book(models.Model):
    # for user
    name = models.CharField(max_length=255, unique=True)
    price = models.FloatField()
    discount = models.IntegerField(default=1)
    introduce = models.TextField(blank=True)
    count = models.IntegerField(default=0)
    author = models.CharField(max_length=255)
    image = models.ImageField(upload_to='book/', blank=True, null=True)
    image_url = models.URLField(max_length=255, blank=True, null=True)


    def __str__(self):
        return self.name

    def __unicode__(self):
        return u'%s' % self.__str__()
