from django.db import models

# Create your models here.
class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    done = models.BooleanField(default=False)

    def __str__(self):
        return str(self.title)

# Modelo para los usuarios
class Usuario(models.Model):
    nombre = models.CharField(max_length=200)
    password = models.CharField(max_length=200)
    is_admin = models.BooleanField(default=False)
    date = models.TextField(blank=True)
    tiempo = models.TextField(blank=True)
    contador1 = models.IntegerField(default=0)
    contador2 = models.IntegerField(default=0)

    def __str__(self):
        return str(self.nombre)
