
from rest_framework import routers
from users.api.views import UserViewSet, GroupViewSet
from book.api.views import BookViewSet
from order.api.views import OrderViewSet

router = routers.DefaultRouter()


router.register(r'book', BookViewSet)
router.register(r'groups', GroupViewSet)
router.register(r'order', OrderViewSet)
router.register(r'users', UserViewSet)