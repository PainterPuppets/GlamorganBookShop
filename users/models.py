# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib.auth.models import User

from django.db import models

class UserProfile(models.Model):
    user = models.OneToOneField(User)
    # for admin
    is_staff = models.BooleanField('staff status', default=False)