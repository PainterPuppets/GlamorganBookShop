# coding: utf8
from django.contrib.auth.models import User, Group

from rest_framework.decorators import api_view, permission_classes, detail_route
from rest_framework.permissions import IsAdminUser, IsAuthenticated
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
    permission_classes = [IsAuthenticated]

    def list(self, request):
        queryset = self.get_queryset().filter(user=request.user)
        print queryset

        return Response(BorrowSerializer(queryset, many=True).data, status=status.HTTP_200_OK)

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
        borrow = Borrow.objects.create(
            user=user,
            book=book,
        )
        return Response(BorrowSerializer(borrow).data, status=status.HTTP_200_OK)

    @detail_route(methods=['POST'])
    def giveback(self, request, *args, **kwargs):
        borrow = self.get_object()
        if borrow.status is not BorrowStatus.BORROWING:
          return Response({'detail': u'不能重复归还'}, status=status.HTTP_400_BAD_REQUEST)

        borrow.status = BorrowStatus.GIVEBACKED
        borrow.return_at = datetime.datetime.now()
        borrow.save()
        book = borrow.book
        book.current_count += 1
        book.save()

        return Response(BorrowSerializer(borrow).data, status=status.HTTP_200_OK)

