# -*- coding: utf-8 -*-
from django.contrib.auth.models import User, Group
from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response

from order.models import Order
from order.api.serializers import OrderSerializer, CreateOrderSerializer
from book.models import Book

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def list(self, request):
        orders = Order.objects.filter(user=request.user)

        return Response(OrderSerializer(orders, many=True).data, status=status.HTTP_200_OK)

    def create(self, request):
        user = request.user

        serializer = CreateOrderSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        try:
            book = Book.objects.get(id=serializer['book_id'])
        except:
            return Response({'error': u'您所要购买的书籍不存在'}, status=status.HTTP_404_NOT_FOUND)

        if Order.objects.filter(user=user, book=book).exists():
            return Response({'error': u'您所购买的书籍已在订单中，请前去支付'}, status=status.HTTP_409_CONFLICT)
        
        order = Order.objects.create(
            book=book,
            user=request.user,
            price=book.price* book.discount
        )

        return Response(OrderSerializer(order).data, status=status.HTTP_200_OK)
        
