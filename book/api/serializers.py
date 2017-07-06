from rest_framework import serializers

from book.models import Book


class BookSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField(read_only=True)

    def get_image(self, obj):
        return obj.image.url if obj.image else ''

    class Meta:
        model = Book
        fields = ('name', 'price', 'discount', 'introduce', 'count', 'author', 'image')
