from django.urls import path, re_path, include
from rest_framework import routers

from . import views


# router = routers.DefaultRouter(trailing_slash=False)
router = routers.DefaultRouter(trailing_slash=False)
# router.register(r'posts', views.BlogPostViewSet, base_name='Post')
router.register(r'users', views.UserViewSet, base_name='User')
router.register(r'hackathons', views.HackathonViewset, base_name='Hackathon')
# router.register(r'ctfs', views.CreateView, base_name='CTF')
router.register(r'challenges', views.ChallengeViewset, base_name='Challenge')

urlpatterns = [
    path(r'api/', include(router.urls) ),
    # path(r'ctfs/', CreateView.as_view(), name="create"),
    # re_path(r'ctfs/(?P<pk>[0-9]+)/$', DetailsView.as_view(), name="details"),
    re_path(r'.*', views.index, name='index'), 

]
