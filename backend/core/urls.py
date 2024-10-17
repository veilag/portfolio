from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from apps.main.views import ToolViewSet

router = routers.DefaultRouter()
router.register(r'tools', ToolViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls))
]
