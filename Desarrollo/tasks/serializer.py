#"""archivo para convertir datos django a json"""

from rest_framework import serializers
from .models import Task, Usuario

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        #fields = ('id', 'title', 'description', 'done')
        fields = '__all__' # para serializar todos los campos


class TaskSerializerUser(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__' # para serializar todos los campos        