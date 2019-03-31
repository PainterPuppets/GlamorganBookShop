# coding: utf8
from django.contrib.auth.models import User, Group

from rest_framework.decorators import api_view, permission_classes, detail_route
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from rest_framework import viewsets, status

from book.models import Book
from borrow.models import Borrow
from borrow.api.serializers import BorrowSerializer
from borrow.constants import (BorrowStatus, BORROW_STATUS_CHOICES)
import datetime


class BorrowViewSet(viewsets.ModelViewSet):
    queryset = Borrow.objects.all()
    serializer_class = BorrowSerializer

    def list(self, request):
        user = request.user
        queryset = queryset.filter(user=user)

        return Response(BorrowSerializer(user).data, status=status.HTTP_200_OK)

    
    def create(self, request):
        user = request.user
        book_id = request.data.get('book_id', None)
        if not book_id:
          return Response({'detail': u'请填写要借阅的书籍'}, status=status.HTTP_400_BAD_REQUEST)
        book = Book.objects.get(id=book_id)
        if not book.can_borrow():
            return Response({'detail': u'书已经被借光了，看看其他书吧'}, status=status.HTTP_404_NOT_FOUND)
        book.current_count -= 1
        book.save()
        Borrow.create(
            user=user,
            book=book,
        )
        return Response(BorrowSerializer(book).data, status=status.HTTP_200_OK)

    @detail_route(methods=['POST'])
    def return_book(self, request):
        borrow = self.get_object()
        borrow.statue = BorrowStatus.RETURNED
        borrow.return_at = datetime.now()
        borrow.save()
        book = borrow.book
        book.current_count += 1
        book.save()

        return Response(BorrowSerializer(borrow).data, status=status.HTTP_200_OK)

