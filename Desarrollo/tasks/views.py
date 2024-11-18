#from django.shortcuts import render
from rest_framework import viewsets
from .serializer import TaskSerializer, TaskSerializerUser
from .models import Task, Usuario

# Create your views here.

class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()

class UserView(viewsets.ModelViewSet):
    serializer_class = TaskSerializerUser
    queryset = Usuario.objects.all()    

