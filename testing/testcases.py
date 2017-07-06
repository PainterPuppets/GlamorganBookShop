# coding: utf-8
import json
from contextlib import contextmanager
from datetime import timedelta

from django.core.cache import caches
from django.test import TestCase as DjangoTestCase
from django.utils import timezone
from django.utils.crypto import get_random_string
from django.contrib.auth.models import User

from testing.client import Client
from book.models import Book

class TestCase(DjangoTestCase):
    client_class = Client

    def setUp(self):
        self.email = 'noip_2008@yeah.net'
        self.user = self.createActivatedUser(self.email)

    def get_password(self, username):
        return username + '2014'

    def createUser(self, username, is_completed=False, is_activated=False, is_superuser=False):
        user, _ = User.objects.get_or_create(username=username)
        user.set_password(self.get_password(username))
        user.is_activated = is_activated
        user.verification_code = '123456'
        user.is_superuser = is_superuser
        user.save()
        return user

    def createActivatedUser(self, username):
        user = self.createUser(username)
        user.is_activated = True
        user.save()
        return user

    def createBook(self, name, price=66, discount=1, introduce='test', count='1', author='佚名'):
        book = Book.objects.create(name=name, price=price, discount=discount, introduce=introduce, count=count, author=author)
        return book

    @contextmanager
    def logged_in_user(self, user, password=None):
        self.log_in_user(user, password)
        yield
        self.log_out_user()

    def log_in_user(self, user, password):
        success = self.client.login(email=user.email,
                                    password=password or self.get_password(user.email))
        self.assertTrue(success)
        self.active_user = user

    def log_out_user(self):
        self.client.logout()
        self.active_user = None
