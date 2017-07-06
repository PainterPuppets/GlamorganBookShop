# coding: utf-8
from django.contrib.auth.models import User, Group
from django.contrib.auth import login as django_login, authenticate

from rest_framework.decorators import api_view, permission_classes, list_route
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from rest_framework import viewsets, status

from users.api.serializers import UserSerializer, GroupSerializer, LoginSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

    @list_route(methods=['POST'])
    def login(self, request):
        '''
        handle user's login when POST to /api/accounts/login/
        '''
        if request.user.is_authenticated():
            return Response({u'success': True})
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        username = serializer.validated_data['username']
        password = serializer.validated_data['password']
        if not User.objects.filter(username__iexact=username).exists():
            return Response({u'detail': u'您输入的账号不存在，请重新输入', u'field': u'email'}, status=status.HTTP_401_UNAUTHORIZED)

        user = authenticate(username=username, password=password)
        if user is None:
            return Response({u'detail': u'您的密码有误，请重新输入', u'field': 'password'}, status.HTTP_401_UNAUTHORIZED)

        django_login(request, user)
        request.session.set_expiry(60 * 60 * 24 * 60)

        return Response({u'success': True})


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer