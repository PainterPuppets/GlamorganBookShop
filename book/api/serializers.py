from rest_framework import serializers

from book.models import Book


class BookSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField(read_only=True)

    def get_image(self, obj):
        return obj.image_url if obj.image_url else obj.image.url

    class Meta:
        model = Book
        fields = ('id', 'name', 'introduce', 'count', 'current_count', 'author', 'image')
