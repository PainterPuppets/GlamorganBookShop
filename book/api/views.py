from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from book.models import Book
from book.api.serializers import BookSerializer


class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
