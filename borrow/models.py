# -*- coding: utf-8 -*-
from django.db import models
from book.models import Book
from users.models import User
from borrow.constants import (BorrowStatus, BORROW_STATUS_CHOICES)

class Borrow(models.Model):
    # for user
    book = models.ForeignKey(Book)
    user = models.ForeignKey(User)
    status = models.IntegerField('借阅状态', choices=BORROW_STATUS_CHOICES,
                                         default=BorrowStatus.BORROWING)
    create_at = models.DateTimeField(blank=True, null=True, auto_now_add=True)
    return_at = models.DateTimeField(blank=True, null=True)
    expire_at = models.DateTimeField(blank=True, null=True)