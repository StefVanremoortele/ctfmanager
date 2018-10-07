from rest_framework import permissions
from rest_framework.permissions import BasePermission
from .models import Hackathon

SAFE_METHODS = ('GET', 'HEAD', 'OPTIONS')


class ReadOnly(permissions.BasePermission):
    """
    The endpoint is read-only request.
    """

    def has_permission(self, request, view):
        return (
            request.method in SAFE_METHODS
        )


# class IsOwner(BasePermission):
#     """Custom permission class to allow only bucketlist owners to edit them."""

#     def has_object_permission(self, request, view, obj):
#         """Return True if permission is granted to the bucketlist owner."""
#         if isinstance(obj, Hackathon):
#             return obj.owner == request.user
#         return obj.owner == request.user