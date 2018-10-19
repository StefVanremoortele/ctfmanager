"""
WSGI config for angular_django_example project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/2.0/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application


os.environ.setdefault("DJANGO_SETTINGS_MODULE", "ctfmanager.settings")

PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))
STATIC_URL = 'ctfman/static/'
STATIC_ROOT = os.path.join(PROJECT_ROOT, 'static')



application = get_wsgi_application()
