from rest_framework import serializers

from borrow.models import Borrow


class BorrowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Borrow
        fields = ('id', 'book', 'user', 'status', 'create_at', 'return_at')
