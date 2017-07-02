from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from order.models import Order
from order.api.serializers import OrderSerializer


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
