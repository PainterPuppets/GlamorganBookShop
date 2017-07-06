# coding: utf-8

from rest_framework.test import APIClient

from django.contrib.auth.models import User, Group
from django.contrib.auth import authenticate
from django.utils import timezone

from testing.testcases import TestCase

import json


class LoginAndRegisterTests(TestCase):
    endpoint = '/api/users/'
  
    def test_login_success(self):
        username = 'painter'
        self.createUser(username)
        loginForm = {
            'username': username,
            'password': self.get_password(username),
        }
        # login success
        response = self.client.post(self.endpoint + 'login/', loginForm)
        self.assertTrue(response.status_code, 200)