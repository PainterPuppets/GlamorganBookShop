# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from users.models import UserProfile


class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('is_staff', )

admin.site.register(UserProfile, UserProfileAdmin)