from rest_framework import serializers

from borrow.models import Borrow
from book.api.serializers import BookMiniSerializer
from users.api.serializers import UserMiniSerializer


class BorrowSerializer(serializers.ModelSerializer):
    book = BookMiniSerializer()
    user = UserMiniSerializer()

    class Meta:
        model = Borrow
        fields = ('id', 'book', 'user', 'status', 'create_at', 'return_at', 'expire_at')
