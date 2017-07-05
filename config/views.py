from django.http import HttpResponseNotFound, HttpResponseRedirect
from django.shortcuts import render


def react(request):
    return render(request, 'base.html', locals())