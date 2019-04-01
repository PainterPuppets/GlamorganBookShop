
from rest_framework import routers
from users.api.views import UserViewSet, GroupViewSet
from book.api.views import BookViewSet
from order.api.views import OrderViewSet
from borrow.api.view import BorrowViewSet

router = routers.DefaultRouter()


router.register(r'book', BookViewSet)
router.register(r'groups', GroupViewSet)
router.register(r'borrow', BorrowViewSet)
router.register(r'users', UserViewSet)