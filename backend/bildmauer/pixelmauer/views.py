from turtle import title
from django.shortcuts import render, redirect
from django.views.decorators.http import require_http_methods

from .models import pixel

# Create your views here.

def index(request):
    pixels = pixel.objects.all()
    return render(request, "base.html", {"pixels": pixels})