# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from book.models import Book
from users.models import User

from order.constants import (OrderStatus, ORDER_STATUS_CHOICES)


class Order(models.Model):
    # for user
    book = models.ForeignKey(Book)
    user = models.ForeignKey(User)
    create_at = models.DateField(auto_now_add=True)
    price = models.IntegerField()
    payment_status = models.IntegerField('支付状态', choices=ORDER_STATUS_CHOICES,
                                         default=OrderStatus.WAITING_FOR_PAYMENT)
