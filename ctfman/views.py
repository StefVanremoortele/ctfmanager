from . import serializers
from .models import Challenge, Hackathon, LogEvent
from .permissions import ReadOnly
from django.contrib.auth.models import User
from django.http import Http404, JsonResponse
from django.shortcuts import render
from rest_framework import generics, permissions, status, viewsets
from rest_framework.authentication import BasicAuthentication, \
    SessionAuthentication
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.views import APIView
from django.forms import Form
# from ctfman.permissions import IsOwner


class CsrfExemptSessionAuthentication(SessionAuthentication):
    def enforce_csrf(self, request):
        return  # To not perform the csrf check previously happening

def index(request, path=''):
    """
    The home page. This renders the container for the single-page app.
    """
    return render(request, 'index.html')


class UserViewSet(viewsets.ModelViewSet):
    """
    Provides basic CRUD functions for the User model
    """
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer
    authentication_classes = ( CsrfExemptSessionAuthentication, BasicAuthentication )

class HackathonViewset(viewsets.ModelViewSet):
    """
    Provides basic CRUD functions for the Ctf model
    """
    queryset = Hackathon.objects.all()
    serializer_class = serializers.HackathonSerializer
    permission_classes = (permissions.IsAuthenticated, ) # TODO: Fix permissions
    authentication_classes = ( CsrfExemptSessionAuthentication, BasicAuthentication)

    # def perform_create(self, serializer):
    #     serializer.save(owner=self.request.user)


    # def create(self, serializer):
    #     # if self.request.method == 'POST':
    #     #     return Http404
    #     # return Response(serializer.data, status=status.HTTP_200_OK)
    #     # return None
    #     if self.request.user is None:
    #         serializer.save(user=User.objects.get(id=1))
    #     else:
    #         serializer.save(user=self.request.user)

class ChallengeViewset(viewsets.ModelViewSet):
    """
    Provides basic CRUD functions for the Ctf model
    """
    queryset = Challenge.objects.all()
    serializer_class = serializers.ChallengeSerializer
    permission_classes = (  )

    # def perform_create(self, serializer):
        # serializer.save(type='MISC')
        


# class BlogPostViewSet(viewsets.ModelViewSet):
#     """
#     Provides basic CRUD functions for the Blog Post model
#     """
#     queryset = BlogPost.objects.all()
#     serializer_class = serializers.BlogPostSerializer
#     permission_classes = (permissions.AllowAny, )

#     def perform_create(self, serializer):
#         if self.request.user is None:
#             serializer.save(user=User.objects.get(id=1))
#         else:
#             serializer.save(user=self.request.user)

# class BlogPostRudViewSet(generics.):
#     """
#     Provides basic CRUD functions for the Blog Post model
#     """
#     queryset = BlogPost.objects.all()
#     serializer_class = serializers.BlogPostSerializer
#     permission_classes = (permissions.AllowAny, )

#     def get_queryset(self):
#         return BlogPost.objects.all()

#     def perform_create(self, serializer):
#         if self.request.user is None:
#             serializer.save(user=User.objects.get(id=1))
#         else:
#             serializer.save(user=self.request.user)



class LogEventViewSet(viewsets.ModelViewSet):
    """
    Provides basic CRUD functions for the Ctf model
    """
    queryset = LogEvent.objects.all()
    serializer_class = serializers.LogEventSerializer
    # permission_classes = ( )
    permission_classes = (permissions.AllowAny, )
    authentication_classes = ( CsrfExemptSessionAuthentication, )