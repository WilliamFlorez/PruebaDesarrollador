# creación de las rutas necesarias para el frondend
from django.urls import path, include
from rest_framework import routers
from tasks import views

#api version
router = routers.DefaultRouter()
router.register(r'tasks', views.TaskView, 'tasks')
router.register(r'user', views.UserView, 'users')

urlpatterns = [
    path("api/v1/", include(router.urls) ),
    path("panzofi/v1/", include(router.urls))
  ]