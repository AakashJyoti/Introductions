from django.http import HttpResponse
from django.shortcuts import render


def home(request):
    # return HttpResponse('Hello mom')
    return render(request, "website/index.html")


def about(request):
    return HttpResponse("Hello my love")


def life(request):
    return HttpResponse("Hello grind")
