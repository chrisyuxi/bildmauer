from importlib.resources import path
from pyexpat import model
from django.db import models
from turtle import title, width

# Create your models here.
class pixel(models.Model):
    height = models.IntegerField(max_length=1024)
    width = models.IntegerField(max_length=1024)
    verfuegebar = models.BooleanField(default=True)

    def __str__(self):
        return self.title

class bild(models.Model):
    positionX = models.IntegerField(max_length=1024)
    positionY = models.IntegerField(max_length=1024)
    path = models.CharField(max_length=200)

    def __str__(self):
        return self.title