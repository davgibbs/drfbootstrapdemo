from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .serializers import EventSerializer, CharacterSerializer
from .models import Event, HPCharacter

def index(request):
    return HttpResponse("Hello, world. You're at the characters index.")


class EventViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class HPCharacterViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = HPCharacter.objects.all()
    serializer_class = CharacterSerializer
