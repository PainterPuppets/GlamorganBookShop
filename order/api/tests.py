# coding: utf-8
from rest_framework.test import APIClient
from testing.testcases import TestCase

import json


class OrderApiTests(TestCase):

    def setUp(self):
        self.client = APIClient(enforce_csrf_checks=True)

        self.user = self.createUser('authenticated@jz.com')
        self.user_client = APIClient(enforce_csrf_checks=True)
        self.user_client.force_authenticate(user=self.user)

        admin = self.createUser('admin@jz.com', is_superuser=True)
        self.admin_client = APIClient(enforce_csrf_checks=True)
        self.admin_client.force_authenticate(user=admin)
    
    def test_get_order_api(self):
        # list
        response = self.client.get('/api/order/', format='json')
        self.assertEqual(response.status_code, 403)

        response = self.user_client.get('/api/order/', format='json')
        self.assertEqual(response.status_code, 200)
        print json.loads(response.content)

    def test_create_order_api(self):
        book = self.createBook('他改变了中国')
        data = {
            'book_id': book.id
        }

        response = self.client.post('/api/order/', data, format='json')
        self.assertEqual(response.status_code, 403)

        response = self.user_client.get('/api/order/', format='json')
        self.assertEqual(response.status_code, 200)

        response = self.user_client.get('/api/order/', format='json')
        self.assertEqual(response.status_code, 200)
        # self.assertEqual(len(json.loads(response.content)['results']), 1)
        

        
