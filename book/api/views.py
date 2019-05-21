# coding: utf8
from django.contrib.auth.models import User, Group

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser
from rest_framework.filters import SearchFilter, DjangoFilterBackend
from rest_framework.response import Response
from rest_framework import viewsets, status

from book.models import Book
from book.api.serializers import BookSerializer


class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    filter_backends = [SearchFilter, DjangoFilterBackend]
    filter_fields = ('is_recommand',)
    search_fields = ('name',)

    # admin create book
    def create(self, request):
        user = request.user
        if not (user.is_superuser or user.is_staff):
            return Response(status=status.HTTP_403_FORBIDDEN)

        serializer = BookSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        book = Book.objects.create(
            name=serializer.validated_data['name'],
            price=serializer.validated_data['price'],
            discount=serializer.validated_data['discount'],
            introduce=serializer.validated_data.get('introduce', ''),
            count=serializer.validated_data['count'],
            author=serializer.validated_data.get('author', '佚名'),
        )

        return Response(BookSerializer(book).data, status=status.HTTP_200_OK)
        
