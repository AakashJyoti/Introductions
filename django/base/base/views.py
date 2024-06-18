from django.http import HttpResponse
from django.shortcuts import render


def base(request):
    return render(request, "website/index.html")


def home(request):
    return HttpResponse("Hello there in Home route")


def about(request):
    return HttpResponse("Hello there in About route")


def contact(request):
    return HttpResponse("Hello there in Contact route")
